import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      main: "#94644A",
      light: "#FFE9CE",
    },
  },
});
