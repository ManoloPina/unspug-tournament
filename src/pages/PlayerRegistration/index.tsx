import React from "react";
//Components
import { Typography } from "@mui/material";
import { PersonRounded, GroupsRounded } from "@mui/icons-material";
//Styles
import * as S from "./styles";
import * as Styles from "styles";

interface Props {}

const PlayerRegistration: React.FC<Props> = () => {
  return (
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
        <Styles.CustomSelect
          label="Classes"
          value=""
          variant="outlined"
          onChange={() => {}}
          className="select-class"
          options={[{ label: "Opção 1", value: "valor" }]}
        />
        <Styles.CustomTextField
          fullWidth
          variant="outlined"
          label="Guild Name"
          InputProps={{ endAdornment: <GroupsRounded /> }}
          className="home-custom-field"
        />
      </S.Sidebar>
    </S.Container>
  );
};

export default React.memo(PlayerRegistration);
