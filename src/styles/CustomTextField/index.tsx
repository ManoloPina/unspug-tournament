import React from "react";
//Styles
import * as S from "./styles";
import { TextFieldProps } from "@mui/material";

const CustomTextField: React.FC<TextFieldProps> = ({ ...props }) => {
  return <S.CustomTextField {...props} />;
};

export default React.memo(CustomTextField);
