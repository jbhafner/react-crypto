import React, { Component } from 'react';
import axios from "axios";
import NumberFormat from "react-number-format";
import "./Home.css";
import Paper from "material-ui/Paper";
import { Toolbar, ToolbarTitle } from "material-ui/Toolbar";
import RaisedButtonSimple from "../Buttons/RaisedButton.js";

const paperStyle = {
  height: "85%",
  width: "85%",
  margin: "7%",
  textAlign: "center",
  display: "inline-block",
};

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cryptos: []
		};
	}

  componentDidMount() {
    this.updateData();
  }

	render() {
		return(
        <Paper style={paperStyle} zDepth={5}>
          <Toolbar style={{ justifyContent: 'center'}}>
            <ToolbarTitle text="Current Cryptocurrency Quotes" />
          </Toolbar>  
          <br />
          {Object.keys(this.state.cryptos).map(key => (
            <div id="crypto-container">
              <span className="left">{key}</span>
              <span className="right">
                <NumberFormat
                  value={this.state.cryptos[key].USD}
                  displayType={"text"}
                  decimalPrecision={2}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </span>
            </div>
          ))}
          <RaisedButtonSimple handleClick={this.updateData} />
        </Paper>  

		)
	}

  updateData = () => {
    console.log("updateData funtion called");
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT,LTC,BCH&tsyms=USD"
      )
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({ cryptos: cryptos });
      });
  };

};

export default Home;