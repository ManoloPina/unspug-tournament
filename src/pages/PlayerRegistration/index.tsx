import React, { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
//Components
import { Typography } from "@mui/material";
import { PersonRounded, GroupsRounded, SaveRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
//Styles
import * as S from "./styles";
import * as Styles from "styles";
//Types
import { ClassesEnum, IFormOption } from "types";

interface Props {}

const PlayerRegistration: React.FC<Props> = () => {
  const { control } = useForm();
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
  return (
    <S.Form>
      <S.Container>
        <S.LogoWrapper>
          <img src="logo.png" />
        </S.LogoWrapper>
        <S.Sidebar>
          <Typography variant="h2" fontWeight="bold" color="white" align="left">
            Inscrição do Torneio 24/11 - Fight Pug 6v6 - Blind Draft
          </Typography>
          <Styles.CustomTextField
            fullWidth
            label="Nickname"
            variant="outlined"
            className="home-custom-field"
            InputProps={{ endAdornment: <PersonRounded /> }}
          />
          <Controller
            name="classes"
            control={control}
            render={({ field }) => (
              <Styles.CustomSelect
                {...field}
                label="Classes"
                variant="outlined"
                className="select-class"
                options={classesOpts}
              />
            )}
          />

          <Styles.CustomTextField
            fullWidth
            variant="outlined"
            label="Guild Name"
            InputProps={{ endAdornment: <GroupsRounded /> }}
            className="home-custom-field"
          />
          <Controller
            control={control}
            name="whant-to-be-leader"
            render={({ field }) => (
              <Styles.CustomCheckbox
                label="Whant to be a leader?"
                color="secondary"
                {...field}
              />
            )}
          />
          <Button
            size="large"
            variant="outlined"
            color="secondary"
            endIcon={<SaveRounded fontSize="large" />}
          >
            Register Player
          </Button>
        </S.Sidebar>
      </S.Container>
    </S.Form>
  );
};

export default React.memo(PlayerRegistration);
