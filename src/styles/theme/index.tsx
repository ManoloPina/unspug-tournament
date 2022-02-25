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
      light: "#C9A68C",
      dark: "#54433A",
    },
    secondary: {
      main: "#FFE9CE",
      light: "#FFF8F0",
      dark: "#FFDAB7",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.8)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "1rem",
          boxShadow: "none",
        },
        containedSecondary: {
          boxShadow: "none",
        },
      },
    },
  },
});
