import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header.lazy";
import GlobleStyle from "./components/styled/Globle.style";
import { RootProvider } from "./hooks/useRoot";
import Routers from "./Routing";

function App() {
  return (
    <BrowserRouter>
      <RootProvider>
        <Header />
        <GlobleStyle />
        <Routers />
      </RootProvider>
    </BrowserRouter>
  );
}

export default App;
