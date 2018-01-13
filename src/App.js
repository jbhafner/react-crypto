import React, { Component } from 'react';

import Home from './Home';
import AddCoins from './AddCoins';
import Blog from './Blog';
import FAQ from './FAQ';
import XBTFairValueCalc from './XBTFairValueCalc'
import ContactUs from './ContactUs';
import Login from './Login';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import './App.css';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import NAVBar from './NAVBar.js';
import RaisedButtonSimple from './RaisedButton.js'
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

const paperStyle = {
    height: '85%',
    width: "85%",
    margin: '7%',
    textAlign: 'center',
    display: 'inline-block',
};

class App extends Component {
 constructor(props) {
  super(props);

  this.state = {
    cryptos: [],
    "open": false,
    "show": null
  };
 } 

   componentDidMount() {
    this.updateData()
   }

   handleToggle = () => this.setState({open: !this.state.open});

  showHome = () => {
    this.setState({show: 'home', open: false})
  }

  showAddCoins = () => {
    this.setState({show: 'addCoins', open: false})
  }

  showBlog = () => {
    this.setState({show:'blog', open: false})
  }

  showFAQ = () => {
    this.setState({show:'faq', open: false})
  }

  showXBT_FV = () => {
    this.setState({show:'xbt_fv', open: false})
  }

  showContact = () => {
    this.setState({show: 'contact', open: false})
  }

  showLogin = () => {
    this.setState({show:"login", open: false})
  }

  render() {
    let content = null;
      console.log('NAVBar ', NAVBar);

      switch(this.state.show) {
          case 'home':
              content = (<Home/>);
              break; 

          case 'addCoins':
              content = (<AddCoins/>);
              break;

          case 'blog':
              content = (<Blog/>);
              break;

          case 'faq':
              content = (<FAQ/>);
              break;

          case 'xbt_fv':
              content = (<XBTFairValueCalc/>);
              break;    

          case 'contact':
              content = (<ContactUs/>);
              break;

          case 'login':
              content = (<Login/>);
              break;                      

          default:
              content = <h1>Waiting</h1>
      }


      return (
        <div className="App">

          <AppBar 
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            title="cryptoTracker"
            onLeftIconButtonClick={this.handleToggle}
          />

          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}>

            <AppBar title="AppBar"/>
              <MenuItem onClick={this.showHome}>Home</MenuItem>
              <MenuItem onClick={this.showAddCoins}>Add Coins</MenuItem>
              <MenuItem onClick={this.showBlog}>Blog</MenuItem>
              <MenuItem 
                  primaryText="Trading"
                  rightIcon={<ArrowDropRight />}
                      rightIcon={<ArrowDropRight />}
                      menuItems={[
                        <MenuItem onClick={this.showXBT_FV} primaryText="Bitcoin Futures Fair Value Calculator" />,
                        <MenuItem primaryText="Other1" />,
                        <MenuItem primaryText="Other2" />,
                        <MenuItem primaryText="Other3" />,
                      ]}
              />  
    

              <MenuItem onClick={this.showFAQ}>FAQ</MenuItem>
              <MenuItem onClick={this.showContact}>Contact</MenuItem>
              <MenuItem onClick={this.showLogin}>Login</MenuItem>
          </Drawer>

          <Paper style={paperStyle} zDepth={5}>
            <Toolbar style={{"justifyContent": "center"}}>
              <ToolbarTitle text="Welcome to cryptoTracker"/>
            </Toolbar>
            {content}
            <p>Click the icon on the AppBar to open the Drawer and then pick a menu item.  The text above should change.</p>
          </Paper>    



          {Object.keys(this.state.cryptos).map((key) => (

            <div id="crypto-container">
              <span className="left">{key}</span>
              <span className="right"><NumberFormat value={this.state.cryptos[key].USD} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'$'} /></span>
            </div>
            ))}
          <RaisedButtonSimple handleClick={this.updateData} />  
        </div>
      );

  }

  updateData = () => {
    console.log('updateData funtion called')
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({ cryptos: cryptos })
      })
  }
 
}


export default App;
