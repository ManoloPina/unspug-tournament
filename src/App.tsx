// import logo from "./logo.svg";
// import "./App.css";
import { SnackbarProvider } from "notistack";
//Styles
import { theme } from "styles/theme";
import * as S from "./app-styles";
//Components
import RouterContainer from "Routes/RouteContainer";
import { ThemeProvider } from "@mui/material";

interface Props {}
const App: React.FC<Props> = () => {
  return (
    <SnackbarProvider>
      <ThemeProvider theme={theme}>
        <S.AppContainer className="App">
          <RouterContainer />
        </S.AppContainer>
      </ThemeProvider>
    </SnackbarProvider>
  );
};

export default App;
