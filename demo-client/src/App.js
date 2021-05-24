import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import NavbarComponent from "./components/NavbarComponent";
import AppContainer from "./containers/AppContainer";

import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <NavbarComponent />
          <AppContainer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
