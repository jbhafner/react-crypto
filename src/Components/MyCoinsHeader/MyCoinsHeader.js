import React, { Component } from "react";
import MyCoinsBody from "../MyCoinsBody/MyCoinsBody.js";
import MyCoinsNewForm from "../MyCoinsNewForm/MyCoinsNewForm.js";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import {
  getAllCoins,
  getMyCoins,
  getMyCoinPrices,
  addMyCoin,
  removeMyCoin
} from "../../store/actionCreators";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Toolbar, ToolbarTitle } from "material-ui/Toolbar";

class MyCoinsHeader extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.updateMyCoinPrices = this.updateMyCoinPrices.bind(this);
    this.updateCoins = this.updateCoins.bind(this);
  }

  componentDidMount() {
    this.updateCoins();
    // console.log("called getMyCoins from componentDidMount");
    // this.props.getMyCoins();
    // this.props.getAllCoins();
    // console.log("componentDidMount - this.props", this.props);
  }

  handleAdd(val) {
    console.log("handleAdd(val)", val);
    this.props.addMyCoin(val);
  }

  removeMyCoin(id) {
    console.log("removeMyCoin called");
    this.props.removeMyCoin(id);
  }

  async updateMyCoinPrices() {
    let coinArray = await [];
    let myCoins = await this.props.myCoins;
    await console.log("coinArray 1", coinArray);
    // console.log("updateMyCoinPrices / myCoins", this.props.myCoins);
    await myCoins.forEach(function(item) {
      coinArray.push({ symbol: item.symbol, price: 0 });
    });
    await console.log("coinArray 2", coinArray);
    await coinArray.map(function(item) {
      // console.log("item", item);
      let symbol = item.symbol;
      fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${
          item.symbol
        }&tsyms=USD`
      )
        .then(res => res.json())
        .then(function(data) {
          item.price = data.USD;
        });
    });
    await console.log("coinArray 3", coinArray);
    await getMyCoinPrices(coinArray);
  }

  async updateCoins() {
    let coinArray = await [];
    await console.log("called getMyCoins from componentDidMount");
    await this.props.getMyCoins();
    await this.props.getAllCoins();
    await this.updateMyCoinPrices();
    // await this.props.getMyCoinPrices();
    await console.log("componentDidMount - this.props", this.props);
  }
  render() {
    return (
      <Router>
        <div className="Home">
          <div className="myCoinList">
            <Toolbar className="addCoinToolbar">
              <ToolbarTitle text="My Coin List" />
              <Button color="inherit">
                <Link to="/coins">My Coins</Link>
              </Button>
              <Button color="inherit">
                <Link to="/coins/new">Add Coin</Link>
              </Button>
            </Toolbar>
            <br />
            <Switch>
              <Route
                path="/coins/new"
                component={props => (
                  <MyCoinsNewForm {...props} handleSubmit={this.handleAdd} />
                )}
              />
              <Route
                exact
                path="/coins"
                component={props => (
                  <MyCoinsBody
                    {...props}
                    key={this.props.myCoins._id}
                    allCoins={this.props.allCoins}
                    myCoins={this.props.myCoins}
                    myCoinPrices={this.props.myCoinPrices}
                    removeMyCoin={this.props.removeMyCoin}
                  />
                )}
              />

              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
} // clse class AddCoins

function mapStateToProps(reduxState) {
  return {
    allCoins: reduxState.allCoins,
    myCoins: reduxState.myCoins,
    myCoinPrices: reduxState.myCoinPrices
  };
}

export default connect(
  mapStateToProps,
  {
    getAllCoins,
    getMyCoins,
    getMyCoinPrices,
    addMyCoin,
    removeMyCoin
  }
)(MyCoinsHeader);

// export default MyCoinsHeader;
