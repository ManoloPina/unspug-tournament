import React, { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePlayer } from "hooks";
import { useSnackbar } from "notistack";
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
import { useNavigate } from "react-router-dom";

interface Props {}

const formSchema = yup.object({
  nickname: yup
    .string()
    .trim("The contact name cannot include leading and trailing spaces")
    .strict(true)
    .required(),
  classID: yup.number().required(),
  guildName: yup
    .string()
    .trim("The contact name cannot include leading and trailing spaces")
    .strict(true)
    .required(),
  wantsToBeLeader: yup.boolean(),
});

const PlayerRegistration: React.FC<Props> = () => {
  const { requests: playerHttp, classesOpts } = usePlayer();
  const { enqueueSnackbar } = useSnackbar();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(formSchema),
  });
  //handlers

  const handleFormSubmit = async (values: IFormData) => {
    try {
      const res = await playerHttp.register(values);
      !!res
        ? enqueueSnackbar("Player successfully registered", {
            variant: "success",
            anchorOrigin: { vertical: "top", horizontal: "right" },
          })
        : enqueueSnackbar("It wasn't possible to register this player.", {
            variant: "warning",
            anchorOrigin: { vertical: "top", horizontal: "right" },
          });
    } finally {
    }
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
            name="classID"
            control={control}
            render={({ field }) => (
              <Styles.CustomSelect
                {...field}
                label="Classes"
                variant="outlined"
                className="select-class"
                options={classesOpts.map((opt) => ({
                  ...opt,
                  label: <S.ClassesOptWrapper>{opt.label}</S.ClassesOptWrapper>,
                }))}
                error={!!errors?.classID}
                helperText={errors?.classID?.message}
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
            name="wantsTobeLeader"
            render={({ field }) => (
              <Styles.CustomCheckbox
                {...field}
                color="secondary"
                label="Do you want to be a leader?"
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
