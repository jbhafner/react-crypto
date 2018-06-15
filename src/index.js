import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App.js";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
// import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/rootReducer";
import { BrowserRouter } from "react-router-dom";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

console.log("REDUX store", store);
// const muiTheme = getMuiTheme(darkBaseTheme);
// const muiTheme = getMuiTheme(lightBaseTheme);
// Indigo500 / Blue500
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#3F51B5",
    accent1Color: "#2196F3"
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
