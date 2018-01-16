import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import registerServiceWorker from "./registerServiceWorker";

const muiTheme = getMuiTheme(darkBaseTheme);

// Indigo500 / Blue500
// const muiTheme = getMuiTheme ({
// 	palette: {
// 		primary1Color: "#3F51B5",
// 		accent1Color: "#2196F3"
// 	}
// });

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

registerServiceWorker();
