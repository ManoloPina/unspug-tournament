import styled from "styled-components";
import { FormControl as FormControlMUI } from "@mui/material";
import { theme } from "styles/theme";

export const FormControl = styled(FormControlMUI)`
  && {
    & .MuiOutlinedInput-root {
      text-align: left;
      border-radius: 1rem;
      background-color: ${theme.palette.secondary.main};
    }
  }
`;
