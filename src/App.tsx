// import logo from "./logo.svg";
// import "./App.css";
import { SnackbarProvider } from "notistack";
//Styles
import { theme } from "styles/theme";
import * as S from "./app-styles";
import "animate.css";
//Components
import RouterContainer from "Routes/RouteContainer";
import { ThemeProvider } from "@mui/material";
import Providers from "providers";

interface Props {}
const App: React.FC<Props> = () => {
  return (
    <SnackbarProvider>
      <ThemeProvider theme={theme}>
        <Providers>
          <S.AppContainer className="App">
            <RouterContainer />
          </S.AppContainer>
        </Providers>
      </ThemeProvider>
    </SnackbarProvider>
  );
};

export default App;
