import React, { Component } from "react";
import CoinItem from "../CoinItem/CoinItem.js";
import MyCoinsTable from "../MyCoinsTable/MyCoinsTable.js";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
// import {
//   getAllCoins,
//   getMyCoins,
//   addMyCoin,
//   removeMyCoin,
//   getMyCoinPrices
// } from "../../Actions/actionCreators";
import { Link, Route, Redirect } from "react-router-dom";
import { Toolbar, ToolbarTitle } from "material-ui/Toolbar";

class AddCoins extends Component {
  constructor(props) {
    super(props);
    // this.updateMyCoinPrices = this.updateMyCoinPrices.bind(this);
  }

  componentDidMount() {
    console.log("MyCoinsBody.js component did mount");
    // this.updateMyCoinPrices();
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
        key={val._id}
        removeMyCoin={this.removeMyCoin.bind(this, val._id)}
        name={val.name}
        symbol={val.symbol}
        website_slug={val.website_slug}
        id={val.id}
      />
    ));

    let myCoinsTable = <MyCoinsTable myCoins={this.props.myCoins} />;

    return (
      <div className="Home">
        <div className="myCoinList">
          <br />
          {myCoins}
        </div>
        {myCoinsTable}
      </div>
    );
  }
} // clse class AddCoins

export default AddCoins;
