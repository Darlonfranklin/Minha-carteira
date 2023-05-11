import { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { useTheme } from "./hooks/theme";
import AuthRoutes from "./routes/auth.routes";

const App: React.FC = () => {
  const { theme } = useTheme();
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AuthRoutes />
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
