import { Container, MantineProvider } from "@mantine/core";
import LazyHeader from "components/Header/Header.lazy";
import { mantinethemeConfig } from "components/styled";
import GlobleStyle from "components/styled/Globle.style";
import { RootProvider } from "hooks/useRoot";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routing";

function App() {
  return (
    <BrowserRouter>
      <MantineProvider theme={ mantinethemeConfig } withCSSVariables>
        <RootProvider>
          <LazyHeader />
          <GlobleStyle />
          <Routers />
        </RootProvider>
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
// npx generate-react-cli component ComponentName