import React from "react";
//Components
import { Typography, TextField } from "@mui/material";
//Styles
import * as S from "./styles";

interface Props {}

const PlayerRegistration: React.FC<Props> = () => {
  return (
    <S.Sidebar>
      <Typography variant="h2" fontWeight="bold" color="white" align="left">
        Inscrição do Torneio 24/11 - Fight Pug 6v6 - Blind Draft
      </Typography>
      <TextField fullWidth variant="outlined" label="Nickname" />
      <TextField fullWidth variant="outlined" label="Nickname" />
      <TextField fullWidth variant="outlined" label="Nickname" />
    </S.Sidebar>
  );
};

export default React.memo(PlayerRegistration);
