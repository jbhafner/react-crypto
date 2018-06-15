import React, { Component } from "react";
import CoinItem from "../CoinItem/CoinItem.js";
import NewCoinForm from "../NewCoinForm/NewCoinForm.js";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import {
  getAllCoins,
  getMyCoins,
  addMyCoin,
  removeMyCoin
} from "../../Actions/actionCreators";
import { Link, Route, Redirect } from "react-router-dom";
import { Toolbar, ToolbarTitle } from "material-ui/Toolbar";
console.log("getMyCoins", getMyCoins);

class AddCoins extends Component {
  constructor(props) {
    super(props);
    // this.addMyCoin = this.addMyCoin.bind(this);
  }

  componentDidMount() {
    console.log("called getMyCoins from componentDidMount");
    this.props.getMyCoins();
    this.props.getAllCoins();
    console.log("componentDidMount - this.props", this.props);
  }

  handleAdd(val) {
    this.props.addMyCoin(val);
  }

  removeMyCoin(id) {
    console.log("removeMyCoin called");
    this.props.removeMyCoin(id);
  }

  render() {
    let myCoins = this.props.myCoins.map(val => (
      <CoinItem
        removeMyCoin={this.removeMyCoin.bind(this, val._id)}
        name={val.name}
        symbol={val.symbol}
        website_slug={val.website_slug}
        id={val.id}
        key={val._id}
      />
    ));
    return (
      <div className="Home">
        <div className="myCoinList">
          <Toolbar className="addCoinToolbar">
            <ToolbarTitle text="My Coin List" />
            <Button color="inherit" onClick={getMyCoins}>
              Refresh
            </Button>
            <Button color="inherit">
              <Link to="/coins/new">Add Coin</Link>
            </Button>
          </Toolbar>
          <br />
          {myCoins}
          <Route
            path="/coins/new"
            component={props => (
              <NewCoinForm {...props} handleAdd={addMyCoin} />
            )}
          />
        </div>
      </div>
    );
  }
} // clse class AddCoins

function mapStateToProps(reduxState) {
  return {
    allCoins: reduxState.allCoins,
    myCoins: reduxState.myCoins
  };
}

export default connect(
  mapStateToProps,
  {
    getAllCoins,
    getMyCoins,
    addMyCoin,
    removeMyCoin
  }
)(AddCoins);

// export default AddCoins;
