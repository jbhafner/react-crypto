import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import registerServiceWorker from './registerServiceWorker';

const muiTheme = getMuiTheme(darkBaseTheme);


ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
		<App />
	</MuiThemeProvider>, 
	document.getElementById('root'));
	
registerServiceWorker();
