import React from "react";
import { useAuth } from "hooks";
import { Controller, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";
//Styles
import * as S from "./styles";
//Components
import CustomTextField from "styles/CustomTextField";
import { Button } from "@mui/material";
import { LoginRounded } from "@mui/icons-material";
//types
// import { CommonEventType } from "types";
import { FormData } from "./types";
import { ROUTES } from "const";

interface Props {}

const Login: React.FC<Props> = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<FormData>();
  //handlers
  const _handleSubmit = (values: FormData) => {
    const { email } = values;
    setUser({ userName: "mocked-user", email });
    navigate(ROUTES.ADMIN);
  };
  return (
    <S.LoginContainer>
      <S.Logo src="logo.png" />
      <S.LoginWrapper>
        <S.Title>Login</S.Title>
        <S.FormWrapper onSubmit={handleSubmit(_handleSubmit)}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <CustomTextField
                {...field}
                fullWidth
                label="E-mail"
                color="secondary"
                variant="standard"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <CustomTextField
                {...field}
                fullWidth
                type="password"
                label="Password"
                color="secondary"
                variant="standard"
              />
            )}
          />

          <Button
            size="large"
            type="submit"
            color="secondary"
            variant="contained"
            endIcon={<LoginRounded />}
          >
            Login
          </Button>
        </S.FormWrapper>
        <DevTool control={control} />
      </S.LoginWrapper>
    </S.LoginContainer>
  );
};

export default Login;
