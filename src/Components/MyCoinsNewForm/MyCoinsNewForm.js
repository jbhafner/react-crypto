import React, { Component } from "react";
// import MyCoinsDropDown from "../MyCoinsDropdown/MyCoinsDropdown";

class MyCoinsNewForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      symbol: "",
      name: "",
      symbol: "",
      website_slug: "",
      id: ""
    };
    console.log("this.state", this.state);
  }

  handleSubmit(event) {
    console.log("event", event);
    event.preventDefault();
    console.log("this.props.handleSubmit", this.handleSubmit);
    console.log("this.state.symbol", this.state.symbol);
    this.props.handleSubmit({ ...this.state });
    event.target.reset();
    this.props.history.push("/coins/new");
  }

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
      <form onSubmit={event => this.handleSubmit(event)}>
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

export default MyCoinsNewForm;
