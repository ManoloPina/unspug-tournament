import React, { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//Components
import { Typography } from "@mui/material";
import { PersonRounded, GroupsRounded, SaveRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
//Styles
import * as S from "./styles";
import * as Styles from "styles";
//Types
import { ClassesEnum, IFormOption } from "types";
import { IFormData } from "./types";

interface Props {}

const formSchema = yup.object({
  nickname: yup
    .string()
    .trim("The contact name cannot include leading and trailing spaces")
    .strict(true)
    .required(),
  class: yup.number().required(),
  guildName: yup
    .string()
    .trim("The contact name cannot include leading and trailing spaces")
    .strict(true)
    .required(),
  wantToBeLeader: yup.boolean(),
});

const PlayerRegistration: React.FC<Props> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(formSchema),
  });
  //handlers
  const classesOpts = useMemo(
    () =>
      [
        { label: "Arcane Master", value: ClassesEnum.ArcaneMaster },
        { label: "Beggetter", value: ClassesEnum.Beggetter },
        { label: "Blase Soul", value: ClassesEnum.BlaseSoul },
        { label: "Chronomancer", value: ClassesEnum.Chronomancer },
        { label: "Divine Avenger", value: ClassesEnum.DivineAvenger },
        { label: "Doram", value: ClassesEnum.Doram },
        { label: "Dragon Fist", value: ClassesEnum.DragonFist },
        { label: "Gunslinger", value: ClassesEnum.Gunslinger },
        { label: "Lightbringer", value: ClassesEnum.Lightbringer },
        { label: "Luna Danseuse", value: ClassesEnum.LunaDanseuse },
        { label: "Ninja", value: ClassesEnum.Ninja },
        { label: "Novice Guardian", value: ClassesEnum.NoviceGuardian },
        { label: "Phanton Dance", value: ClassesEnum.PhantonDance },
        { label: "Ronin", value: ClassesEnum.Ronin },
        { label: "Runemaster", value: ClassesEnum.Runemaster },
        { label: "Slayer", value: ClassesEnum.Slayer },
        { label: "Solar Trouvere", value: ClassesEnum.SolarTrouvere },
        { label: "Stellar Hunter", value: ClassesEnum.StellarHunter },
        { label: "Wataru", value: ClassesEnum.Wataru },
      ] as IFormOption[],
    []
  );

  const handleFormSubmit = (values: any) => {
    console.log("values:", values);
  };
  return (
    <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
      <S.Container>
        <S.LogoWrapper>
          <img src="logo.png" />
        </S.LogoWrapper>
        <S.Sidebar>
          <Typography variant="h2" fontWeight="bold" color="white" align="left">
            Inscrição do Torneio 24/11 - Fight Pug 6v6 - Blind Draft
          </Typography>
          <Controller
            control={control}
            name="nickname"
            render={({ field }) => (
              <Styles.CustomTextField
                {...field}
                fullWidth
                label="Nickname"
                variant="outlined"
                className="home-custom-field"
                error={!!errors?.nickname}
                helperText={errors?.nickname?.message}
                InputProps={{ endAdornment: <PersonRounded /> }}
              />
            )}
          />

          <Controller
            name="class"
            control={control}
            render={({ field }) => (
              <Styles.CustomSelect
                {...field}
                label="Classes"
                variant="outlined"
                className="select-class"
                options={classesOpts}
                error={!!errors?.class}
                helperText={errors?.class?.message}
              />
            )}
          />

          <Controller
            name="guildName"
            control={control}
            render={({ field }) => (
              <Styles.CustomTextField
                {...field}
                fullWidth
                variant="outlined"
                label="Guild Name"
                className="home-custom-field"
                error={!!errors?.guildName}
                helperText={errors?.guildName?.message}
                InputProps={{ endAdornment: <GroupsRounded /> }}
              />
            )}
          />

          <Controller
            control={control}
            name="wantToBeLeader"
            render={({ field }) => (
              <Styles.CustomCheckbox
                {...field}
                color="secondary"
                label="Whant to be a leader?"
              />
            )}
          />
          <Button
            size="large"
            variant="outlined"
            color="secondary"
            type="submit"
            endIcon={<SaveRounded fontSize="large" />}
          >
            Register Player
          </Button>
        </S.Sidebar>
      </S.Container>
      <DevTool control={control} />
    </S.Form>
  );
};

export default React.memo(PlayerRegistration);
