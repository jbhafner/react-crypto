import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewCoin, fetchCoins } from "../../store/actions/coins";
// import MyCoinsDropDown from "../MyCoinsDropdown/MyCoinsDropdown";
import TextField from "material-ui/TextField";
import Button from "@material-ui/core/Button";

const style = {
  margin: "5px",
  color: "white"
};

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

  // componentWillUnmount() {
  //   let id = this.props.id;
  //   this.props.fetchCoins(id);
  // }
  handleNewCoin = event => {
    console.log("event", event);
    event.preventDefault();
    console.log(
      "MyNewCoinsForm.js/handleNewCoin - this.props.handleSubmit",
      this.handleSubmit
    );
    console.log(
      "MyNewCoinsForm.js/handleNewCoin - this.state.symbol",
      this.state.symbol
    );
    console.log("MyNewCoinsForm.js/handleNewCoin - this.state", ...this.state);
    this.props.postNewCoin({ ...this.state });
    // event.target.reset();
    this.setState({});
    this.props.history.push("/myCoinsList/list");
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
        {this.props.errors.message && <div>{this.props.errors}</div>}
        <TextField
          type="text"
          name="symbol"
          id="symbol"
          hintText="Cryptocurrency Symbol - ex. BTC for Bitcoin"
          floatingLabelText="Cryptocurrency Symbol"
          onChange={this.handleChange}
        />
        <br />
        <TextField
          type="text"
          name="name"
          id="name"
          floatingLabelText="Name"
          onChange={this.handleChange}
        />
        <br />
        <TextField
          type="text"
          name="purchDate"
          id="purchDate"
          floatingLabelText="Purchase Date"
          onChange={this.handleChange}
        />
        <br />
        <TextField
          type="text"
          name="baseCurrency"
          id="baseCurrency"
          floatingLabelText="Base Currency"
          defaultValue="BTC"
          onChange={this.handleChange}
        />
        <br />
        <TextField
          type="text"
          name="price"
          id="price"
          floatingLabelText="Price"
          onChange={this.handleChange}
        />
        <br />
        <TextField
          type="text"
          name="amount"
          id="amount"
          floatingLabelText="Amount"
          onChange={this.handleChange}
        />
        <br />
        <Button
          type="submit"
          label="Add A Coin"
          className="button-submit"
          style={style}
          variant="contained"
        >
          Add A Coin
        </Button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors,
    newCoin: state
  };
}
export default connect(
  mapStateToProps,
  { postNewCoin }
)(MyCoinsNewForm);
