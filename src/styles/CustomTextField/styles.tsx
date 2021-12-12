import { TextField } from "@mui/material";
import { theme } from "styles/theme";
import styled from "styled-components";

export const CustomTextField = styled(TextField)`
  && {
    & .MuiOutlinedInput-root {
      border-radius: 1rem;
      background-color: ${theme.palette.secondary.main};
    }
  }
`;
