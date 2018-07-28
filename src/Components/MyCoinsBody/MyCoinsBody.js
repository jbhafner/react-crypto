import React, { Component } from "react";
import CoinItem from "../CoinItem/CoinItem.js";
import MyCoinsTable from "../MyCoinsTable/MyCoinsTable.js";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
// import {
//   getAllCoins,
//   getMyCoins,
//   getMyCoinPrices
// } from "../../store/actionCreators";
import { Link, Route, Redirect } from "react-router-dom";
import { Toolbar, ToolbarTitle } from "material-ui/Toolbar";

class AddCoins extends Component {
  constructor(props) {
    super(props);
    console.log("MyCoinsBody - this.props", this.props);

    // this.updateMyCoinPrices = this.updateMyCoinPrices.bind(this);
  }

  componentWillUpdate() {
    let id = this.props.id;
    this.props.fetchCoins(id);
    console.log("MyCoinsBody.js/componentWillUpdate - this.props", this.props);
  }
  componentDidMount() {
    console.log("MyCoinsBody.js component did mount");
    // this.props.updateMyCoinPrices();

    // console.log(
    //   "MyCoinsBody.js - after component did mount - props",
    //   this.props
    // );
  }

  handleAdd(val) {
    this.props.postNewCoin(val);
  }

  removeCoin(user_id, coin_id) {
    console.log("removeCoin called / user_id:", user_id, "coin_id", coin_id);
    this.props.removeCoin(user_id, coin_id);
  }
  render() {
    console.log(
      "MyCoinsBody.js/render - this.props.myCoins",
      this.props.myCoins,
      // "this.props.myCoins[0]._id",
      // this.props.myCoins[0]._id,
      "isArr?",
      Array.isArray(this.props.myCoins)
    );
    let myCoins = this.props.myCoins.map(val => (
      <CoinItem
        key={val._id}
        removeCoin={this.removeCoin.bind(this, val.user._id, val._id)}
        name={val.name}
        symbol={val.symbol}
        website_slug={val.website_slug}
        id={val.id}
      />
    ));

    // let { myCoins } = this.props;

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
