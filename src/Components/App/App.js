import React, { Component } from "react";
// import {BrowserRouter, Route} from 'react-router-dom';
// import { connect } from "react-redux";
import { Link, Route, Redirect } from "react-router-dom";
// import axios from "axios";

import Home from "../Home/Home";
import AddCoins from "../AddCoins/AddCoins";
import Blog from "../Blog/Blog";
import FAQ from "../FAQ/FAQ";
import FVArticle from "../Resources/FVArticle";
import Regulations from "../Resources/Regulations";
import XBTFairValueCalc from "../Resources/XBTFairValueCalc";
import ContactUs from "../ContactUs/ContactUs";
import Login from "../Login/Login";
import cryptoLogo from "./cryptoLogo.png";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import Paper from "material-ui/Paper";
import "./App.css";
// import axios from "axios";
import ArrowDropRight from "material-ui/svg-icons/navigation-arrow-drop-right";
import backgroundImage from "../../images/charnaTop.jpg";
// import ToolBar from "material-ui/Toolbar";
import Button from "material-ui/IconButton";
import LoginScreen from "../LoginScreen/LoginScreen";

// import crypto_logo from "../../images/crypto_logo.png";
import silverCoin from "../../images/silverCoin.png";

import Footer from "../Footer/foot.js";

const paperStyle = {
  height: "85%",
  width: "85%",
  margin: "7%",
  textAlign: "center",
  display: "inline-block",
  backgroundImage: { backgroundImage }
};

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     cryptos: [],
  //     open: false,
  //     show: null,
  //     loginPage: [],
  //     coinList: []
  //   };
  // }

  componentWillMount() {
    var loginPage = [];
    loginPage.push(<LoginScreen parentContext={this} />);
    this.setState({
      loginPage: loginPage
    });
  }

  // componentDidMount() {
  //   this.props.getMyCoins();
  // }

  handleToggle = () => this.setState({ open: !this.state.open });

  showHome = () => {
    this.setState({ show: "home", open: false });
  };

  showAddCoins = () => {
    this.setState({ show: "addCoins", open: false });
  };

  showBlog = () => {
    this.setState({ show: "blog", open: false });
  };

  showFAQ = () => {
    this.setState({ show: "faq", open: false });
  };

  showFVArticle = () => {
    this.setState({ show: "fvArticle", open: false });
  };

  showRegulations = () => {
    this.setState({ show: "regulations", open: false });
  };

  showXBT_FV = () => {
    this.setState({ show: "xbt_fv", open: false });
  };

  showContact = () => {
    this.setState({ show: "contact", open: false });
  };

  showLogin = () => {
    this.setState({ show: "login", open: false });
  };

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google">Login With Google</a>;
      default:
        return <a href="/api/logout">Logout</a>;
    }
  }

  render() {
    // console.log(this.props);
    let content = null;

    switch (this.state.show) {
      case "home":
        content = <Home />;
        break;

      case "addCoins":
        content = <AddCoins />;
        break;

      case "blog":
        content = <Blog />;
        break;

      case "faq":
        content = <FAQ />;
        break;

      case "fvArticle":
        content = <FVArticle />;
        break;

      case "regulations":
        content = <Regulations />;
        break;

      case "xbt_fv":
        content = <XBTFairValueCalc />;
        break;

      case "contact":
        content = <ContactUs />;
        break;

      case "login":
        content = <Login />;
        break;

      default:
        content = <Home />;
    }

    return (
      <div className="App">
        <div className="logo">
          <AppBar
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            style={{ position: "fixed", top: 0 }}
            title={<img src={silverCoin} alt="logo" width="25px" height="25" />}
            onLeftIconButtonClick={this.handleToggle}
          />
        </div>

        <div className="banner">
          <img src={cryptoLogo} alt="CryptoLogo" width="100%" height="200px" />
        </div>

        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <AppBar title="CT" />
          <MenuItem onClick={this.showHome}>Home</MenuItem>
          <MenuItem onClick={this.showAddCoins}>My Coins</MenuItem>
          <MenuItem onClick={this.showBlog}>Blog</MenuItem>
          <MenuItem
            primaryText="Resources"
            rightIcon={<ArrowDropRight />}
            menuItems={[
              <MenuItem
                onClick={this.showRegulations}
                primaryText="Regulations"
              />,
              <MenuItem
                onClick={this.showXBT_FV}
                primaryText="Bitcoin Futures Fair Value Calculator"
              />,
              <MenuItem
                onClick={this.showFVArticle}
                primaryText="Trading Bitcoin Futures"
              />
            ]}
          />

          <MenuItem onClick={this.showFAQ}>FAQ</MenuItem>
          <MenuItem onClick={this.showContact}>Contact</MenuItem>
          <MenuItem onClick={this.showLogin}>Login</MenuItem>
        </Drawer>

        <Button color="inherit">Login</Button>

        <Paper style={paperStyle} zDepth={5}>
          {content} {/* this is main content area */}
        </Paper>

        {/*<div className="banner">
        //   <img src={cryptoLogo} alt="CryptoLogo" width="100%" height="200px"/>
        // </div>*/}

        <Footer />
      </div> // close div className="App"
    ); // close return
  } // close render

  // ===== FUNCTIONS ===== //

  // ===== END FUNCTIONS ===== //
} // close class App extends Component

export default App;
