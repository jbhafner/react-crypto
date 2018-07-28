import React from "react";
// import { configureStore } from "../store";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import AuthForm from "../Components/AuthForm/AuthForm";

import Home from "../Components/Home/Home";
import Blog from "../Components/Blog/Blog";
import FAQ from "../Components/FAQ/FAQ";
import FVArticle from "../Components/Resources/FVArticle";
import XBTFairValueCalc from "../Components/Resources/XBTFairValueCalc";
import ContactUs from "../Components/ContactUs/ContactUs";
import Paper from "material-ui/Paper";
import backgroundImage from "../images/charnaTop.jpg";
import AddCoins from "../Components/MyCoinsHeader/MyCoinsHeader";
import cryptoLogo from "../images/cryptoLogo.png";
import Regulations from "../Components/Resources/Regulations";

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
  console.log("Main.js / this.props", props);
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
            path="/myCoinsList"
            render={props => (
              <AddCoins id={currentUser.user.id} myCoins={myCoins} {...props} />
            )}
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
          <Route
            exact
            path="/resources/regulations"
            render={props => <Regulations />}
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
