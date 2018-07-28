import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddCoins from "../MyCoinsHeader/MyCoinsHeader";
import AppBar from "material-ui/AppBar";
import ArrowDropRight from "material-ui/svg-icons/navigation-arrow-drop-right";
import Blog from "../Blog/Blog";
import Button from "@material-ui/core/Button";
import ContactUs from "../ContactUs/ContactUs";
import Drawer from "material-ui/Drawer";
import FAQ from "../FAQ/FAQ";
import FVArticle from "../Resources/FVArticle";
import Home from "../Home/Home";
import Login from "../Login2/Login2";
import MenuItem from "material-ui/MenuItem";
import Regulations from "../Resources/Regulations";
import XBTFairValueCalc from "../Resources/XBTFairValueCalc";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";
import "./NAVBar.css";
import Toolbar from "@material-ui/core/Toolbar";

// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit,
//     margin: "5px"
//   }
// });

const style = {
  margin: "5px",
  color: "white"
};
class NAVBar extends Component {
  constructor(props) {
    super(props);
    // const { classes } = props;

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

  showRegulations = () => {
    this.setState({ show: "regulations", open: false });
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

      case "regulations":
        content = <Regulations />;
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
                <Button
                  onClick={this.logout}
                  component={Link}
                  to="/signin"
                  variant="outlined"
                  style={style}
                >
                  Log Out
                </Button>
              ) : (
                <div>
                  <Button
                    component={Link}
                    to="/signin"
                    variant="outlined"
                    style={style}
                  >
                    Log In
                  </Button>
                  <Button
                    component={Link}
                    to="/signup"
                    variant="outlined"
                    style={style}
                  >
                    Sign Up
                  </Button>
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
          {this.props.currentUser.isAuthenticated ? (
            <MenuItem
              onClick={this.showAddCoins}
              containerElement={<Link to="/myCoinsList" />}
              primaryText="My Coins"
            />
          ) : null}
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
              <MenuItem
                onClick={this.showRegulations}
                containerElement={<Link to="/resources/regulations" />}
                primaryText="Regulations"
              />,
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
