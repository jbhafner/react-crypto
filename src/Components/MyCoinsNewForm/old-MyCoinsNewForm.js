import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewCoin } from "../../store/actions/coins";
// import MyCoinsDropDown from "../MyCoinsDropdown/MyCoinsDropdown";

class MyCoinsNewForm extends Component {
  constructor(props) {
    super(props);
    // this.handleNewCoin = this.handleNewCoin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      amount: "",
      symbol: "",
      name: "",
      price: "",
      purchDate: "",
      baseCurrency: "",
      website_slug: "",
      id: ""
    };
    console.log("this.state", this.state);
  }

  handleNewCoin = event => {
    console.log("event", event);
    event.preventDefault();
    console.log("this.props.handleSubmit", this.handleSubmit);
    console.log("this.state.symbol", this.state.symbol);
    console.log("this.state", this.state);
    this.props.postNewCoin({ ...this.state });
    // event.target.reset();
    this.props.history.push("/addcoins");
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(
      "event.target.name",
      event.target.name,
      "event.target.value",
      event.target.value
    );
    console.log("this.state", this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleNewCoin}>
        <label htmlFor="symbol">Symbol</label>
        <input
          type="text"
          name="symbol"
          id="symbol"
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={this.handleChange} />
        <br />
        <label htmlFor="purchDate">Purchase Date</label>
        <input
          type="text"
          name="purchDate"
          id="purchDate"
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="baseCurrency">Base Currency</label>
        <input
          type="text"
          name="baseCurrency"
          id="baseCurrency"
          defaultValue="BTC"
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          id="price"
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          name="amount"
          id="amount"
          onChange={this.handleChange}
        />
        <br />
        <button>Add A Crypto-Coin</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    newCoin: state
  };
}
export default connect(
  mapStateToProps,
  { postNewCoin }
)(MyCoinsNewForm);
