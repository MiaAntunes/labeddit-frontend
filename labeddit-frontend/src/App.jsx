import { GlobalStyle } from "./GlobalStyle";
import { GlobalState } from "./context/GlobalState";
import { Router } from "./router/router";

function App() {
  return (
    <>
      <GlobalState>
        <GlobalStyle />
        <Router />
      </GlobalState>
    </>
  );
}

export default App;
