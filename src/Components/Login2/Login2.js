import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Login2 extends Component {
  render() {
    return (
      <nav>
        <div>
          <Link to="/">
            <img src="" alt="CrytoTracker Login" />
          </Link>
          <ul>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(
  mapStateToProps,
  null
)(Login2);
