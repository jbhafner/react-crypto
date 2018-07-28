import React, { Component } from "react";
import MyCoinsBody from "../MyCoinsBody/MyCoinsBody.js";
import MyCoinsNewForm from "../MyCoinsNewForm/MyCoinsNewForm.js";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { fetchCoins, postNewCoin, removeCoin } from "../../store/actions/coins";
import {
  getAllCoins,
  getMyCoins,
  getMyCoinPrices
} from "../../store/actionCreators";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Toolbar, ToolbarTitle } from "material-ui/Toolbar";
// import withAuth from "../../hocs/withAuth.js";
import CoinItem from "../CoinItem/CoinItem";

class MyCoinsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCoin: ""
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.updateMyCoinPrices = this.updateMyCoinPrices.bind(this);
    this.updateCoins = this.updateCoins.bind(this);
    // let id = this.props.id;
  }

  // let testID = this.props.currentUser.user.id;
  // console.log("MyCoinsHeader.js / testID", testID);

  componentDidMount() {
    // this.updateCoins();
    let id = this.props.id;
    console.log("called getMyCoins from componentDidMount - id = ", id);
    this.props.fetchCoins(id);
    // this.updateMyCoinPrices();
  }

  handleAdd = event => {
    // console.log("handleAdd(val)", val);
    this.props.postNewCoin(this.state.newCoin);
    this.setState({ newCoin: "" });
    this.props.history.push("/");
  };

  removeCoin(id) {
    console.log("removeCoin called");
    this.props.removeCoin(id);
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
    console.log("updateCoins called");
    let coinArray = await [];
    await console.log("called getMyCoins from componentDidMount");
    await this.props.getMyCoins();
    await this.props.getAllCoins();
    await this.updateMyCoinPrices();
    // await this.props.getMyCoinPrices();
    await console.log("componentDidMount - this.props", this.props);
  }
  render() {
    const { coins } = this.props;
    console.log("MyCoinsHeader.js - this.props", this.props);
    console.log("MyCoinsHeader.js - coins", coins);
    // console.log("MyCoinsHeader.js - coins.myCoins", coins.myCoins);
    let myCoinList = this.props.myCoins.map(val => (
      <CoinItem
        key={val._id}
        removeCoin={this.removeCoin.bind(this, val._id)}
        name={val.name}
        symbol={val.symbol}
        website_slug={val.website_slug}
        id={val.id}
      />
    ));

    return (
      <Router>
        <div className="Home">
          <div className="myCoinList">
            <Toolbar className="addCoinToolbar">
              <ToolbarTitle text="My Coin List" />
              <Button color="inherit">
                <Link to="/myCoinsList/list">My Coins</Link>
              </Button>
              <Button color="inherit">
                <Link to="/myCoinsList/new">Add Coin</Link>
              </Button>
            </Toolbar>
            <br />
            <Switch>
              <Route
                exact
                path="/myCoinsList/new"
                component={props => (
                  <MyCoinsNewForm
                    {...props}
                    handleSubmit={this.handleAdd}
                    fetchCoins={this.props.fetchCoins}
                  />
                )}
              />

              <Route
                exact
                path="/myCoinsList/list"
                component={props => (
                  <MyCoinsBody
                    id={this.props.id}
                    myCoinList={myCoinList}
                    {...props}
                    key={this.props.myCoins._id}
                    allCoins={this.props.allCoins}
                    myCoins={this.props.myCoins}
                    myCoinPrices={this.props.myCoinPrices}
                    fetchCoins={this.props.fetchCoins}
                    removeCoin={this.props.removeCoin}
                    updateMyCoinPrices={this.props.updateMyCoinPrices}
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
  console.log("MyCoinsHeader.js - mapStateToProps/reduxState", reduxState);
  return {
    allCoins: reduxState.coins.allCoins,
    myCoins: reduxState.coins.myCoins,
    myCoinPrices: reduxState.coins.myCoinPrices,
    id: reduxState.currentUser.user.id
  };
}

export default connect(
  mapStateToProps,
  {
    removeCoin,
    postNewCoin,
    fetchCoins,
    getAllCoins,
    getMyCoins,
    getMyCoinPrices
  }
)(MyCoinsHeader);

// export default MyCoinsHeader;
