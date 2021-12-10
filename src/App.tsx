// import logo from "./logo.svg";
// import "./App.css";
//Styles
import { theme } from "styles/theme";
import * as S from "./styles";
//Components
import RouterContainer from "Routes/RouteContainer";
import { ThemeProvider } from "@mui/material";

interface Props {}
const App: React.FC<Props> = () => {
  return (
    <ThemeProvider theme={theme}>
      <S.AppContainer className="App">
        <RouterContainer />
      </S.AppContainer>
    </ThemeProvider>
  );
};

export default App;
