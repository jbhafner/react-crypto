import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../../store";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../NAVBar/NAVBar";
import Main from "../../containers/Main";
import {
  setAuthorizationToken,
  setCurrentUser
} from "../../store/actions/auth";
import jwtDecode from "jwt-decode";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
// import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import "./App.css";

const store = configureStore();

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  // prevent someone from manually tampering with the key of jwtToken in localStorage
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
  }
}

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#3F51B5",
    accent1Color: "#2196F3"
  }
});

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router>
        <div className="onboarding">
          <Navbar />
          <Main />
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;
