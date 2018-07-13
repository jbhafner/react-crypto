import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddCoins from "../MyCoinsBody/MyCoinsBody";
import AppBar from "material-ui/AppBar";
import ArrowDropRight from "material-ui/svg-icons/navigation-arrow-drop-right";
import backgroundImage from "../../images/charnaTop.jpg";
import Blog from "../Blog/Blog";
import Button from "material-ui/IconButton";
import ContactUs from "../ContactUs/ContactUs";
import cryptoLogo from "../../images/cryptoLogo.png";
import Drawer from "material-ui/Drawer";
import FAQ from "../FAQ/FAQ";
import FlatButton from "material-ui/FlatButton";
import Footer from "../Footer/foot.js";
import FVArticle from "../Resources/FVArticle";
import Home from "../Home/Home";
import Login from "../Login2/Login2";
import LoginScreen from "../LoginScreen/LoginScreen";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import MyCoinsHeader from "../MyCoinsHeader/MyCoinsHeader";
import Paper from "material-ui/Paper";
import Regulations from "../Resources/Regulations";
import silverCoin from "../../images/silverCoin.png";
import XBTFairValueCalc from "../Resources/XBTFairValueCalc";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";
import "./NAVBar.css";
import Toolbar from "@material-ui/core/Toolbar";

class NAVBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      show: null
    };
  }

  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  // componentDidMount() {
  //   this.updateData();
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

  showXBT_FV = () => {
    this.setState({ show: "xbt_fv", open: false });
  };

  showContact = () => {
    this.setState({ show: "contact", open: false });
  };

  showLogin = () => {
    this.setState({ show: "login", open: false });
  };

  render() {
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
        content = <h1>Waiting</h1>;
    }

    return (
      <div className="App">
        <AppBar
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          style={{ position: "fixed", top: 0 }}
          title="CryptoTracker"
          onLeftIconButtonClick={this.handleToggle}
        >
          <div>
            <Toolbar>
              {this.props.currentUser.isAuthenticated ? (
                <Button onClick={this.logout} title="Logout" />
              ) : (
                <div>
                  <a>
                    <Link to={"/signin"}>Log in</Link>
                  </a>
                  <a>
                    <Link to={"/signup"}>Sign Up</Link>
                  </a>
                </div>
              )}
            </Toolbar>
          </div>
        </AppBar>

        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <AppBar title="CT" />
          <MenuItem
            onClick={this.showHome}
            containerElement={<Link to="/" />}
            primaryText="Home"
          />
          <MenuItem
            onClick={this.showAddCoins}
            containerElement={<Link to="/addcoins" />}
            primaryText="Add Coins"
          />
          <MenuItem
            onClick={this.showBlog}
            containerElement={<Link to="/blog" />}
            primaryText="Blog"
          />
          <MenuItem
            primaryText="Resources"
            rightIcon={<ArrowDropRight />}
            menuItems={[
              <MenuItem
                onClick={this.showFVArticle}
                containerElement={<Link to="/resources/xbtFVArticle" />}
                primaryText="Bitcoin Futures Article"
              />,
              <MenuItem
                onClick={this.showXBT_FV}
                containerElement={<Link to="/resources/xbtFVCalculator" />}
                primaryText="Bitcoin Futures Fair Value Calculator"
              />,
              <MenuItem primaryText="Other2" />,
              <MenuItem primaryText="Other3" />
            ]}
          />

          <MenuItem
            onClick={this.showFAQ}
            containerElement={<Link to="/faq" />}
            primaryText="FAQ"
          />
          <MenuItem
            onClick={this.showContact}
            containerElement={<Link to="/contact" />}
            primaryText="Contact Us"
          />
          <MenuItem onClick={this.showLogin}>Login</MenuItem>
        </Drawer>
        <Button color="inherit">
          <Link to="/signin">Login</Link>
        </Button>
        <Button color="inherit">
          <Link to="/signin">Sign Up</Link>
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    open: state.open,
    show: state.show,
    currentUser: state.currentUser
  };
}

export default connect(
  mapStateToProps,
  { logout }
)(NAVBar);

// export default NAVBar;
