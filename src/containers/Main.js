import React from "react";
// import { Provider } from "react-redux";
import { configureStore } from "../store";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import AuthForm from "../Components/AuthForm/AuthForm";

import Home from "../Components/Home/Home";
// import MyCoinsHeader from "../Components/MyCoinsHeader/MyCoinsHeader";
import Blog from "../Components/Blog/Blog";
import FAQ from "../Components/FAQ/FAQ";
import FVArticle from "../Components/Resources/FVArticle";
// import Regulations from "../Components/Resources/Regulations";
import XBTFairValueCalc from "../Components/Resources/XBTFairValueCalc";
import ContactUs from "../Components/ContactUs/ContactUs";
// import Login from "../Components/Login2/Login2";
// import cryptoLogo from "../images/cryptoLogo.png";
// import AppBar from "material-ui/AppBar";
// import Drawer from "material-ui/Drawer";
// import MenuItem from "material-ui/MenuItem";
import Paper from "material-ui/Paper";
// import ArrowDropRight from "material-ui/svg-icons/navigation-arrow-drop-right";
import backgroundImage from "../images/charnaTop.jpg";
// import Button from "material-ui/IconButton";
// import LoginScreen from "../Components/LoginScreen/LoginScreen";
// import Footer from "../Components/Footer/foot.js";
// import silverCoin from "../images/silverCoin.png";
import AddCoins from "../Components/MyCoinsHeader/MyCoinsHeader";
// import "./Main.css";
import cryptoLogo from "../images/cryptoLogo.png";

const paperStyle = {
  height: "85%",
  width: "85%",
  margin: "7%",
  textAlign: "center",
  display: "inline-block",
  backgroundImage: { backgroundImage }
};

// const store = configureStore();

const Main = props => {
  const { authUser, errors, removeError, currentUser, myCoins } = props;
  return (
    <Paper style={paperStyle} zDepth={5}>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home currentUser={currentUser} {...props} />}
          />
          <Route
            exact
            path="/addcoins"
            render={props => <AddCoins myCoins={myCoins} {...props} />}
          />
          <Route exact path="/blog" render={props => <Blog />} />
          <Route
            exact
            path="/resources/xbtFVArticle"
            render={props => <FVArticle />}
          />
          <Route
            exact
            path="/resources/xbtFVCalculator"
            render={props => <XBTFairValueCalc />}
          />

          <Route exact path="/faq" render={props => <FAQ />} />
          <Route exact path="/contact" render={props => <ContactUs />} />
          <Route
            exact
            path="/signin"
            render={props => {
              return (
                <AuthForm
                  removeError={removeError}
                  errors={errors}
                  onAuth={authUser}
                  buttonText="Log in"
                  heading="Welcome Back!"
                  {...props}
                />
              );
            }}
          />
          <Route
            exact
            path="/signup"
            render={props => {
              return (
                <AuthForm
                  removeError={removeError}
                  errors={errors}
                  onAuth={authUser}
                  signUp
                  buttonText="Sign me up!"
                  heading="Join CryptoTracker today."
                  {...props}
                />
              );
            }}
          />
        </Switch>
      </div>
    </Paper>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors,
    content: state.content
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { authUser, removeError }
  )(Main)
);
