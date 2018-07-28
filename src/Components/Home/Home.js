import React, { Component } from "react";
import RaisedButtonSimple from "../Buttons/RaisedButton.js";
import NumberFormat from "react-number-format";
import { Toolbar, ToolbarTitle } from "material-ui/Toolbar";
import CryptoChart from "../CryptoChart/CryptoChart.js";
import Paper from "material-ui/Paper";
import backgroundImage from "../../images/charnaTop.jpg";
import moment from "moment";

// import "./Home.css";

const paperStyle = {
  height: "85%",
  width: "85%",
  margin: "7%",
  textAlign: "center",
  display: "inline-block",
  backgroundImage: { backgroundImage }
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      cryptos: [],
      stateHistData: {},
      open: false,
      show: null,
      chartData: {
        labels: [],
        dataset: [
          {
            label: "Bitcoin Trading History - Last 24 Hours",
            borderColor: "black",
            data: []
          }
        ]
      }
    };
  } // close constructor()

  componentDidMount() {
    this.getCryptoChartData();
    this.getCurrentPriceData();
  }

  render() {
    return (
      <div className="Home">
        <div className="coinList">
          <Toolbar style={{ justifyContent: "center" }}>
            <ToolbarTitle text="Current Cryptocurrency Quotes" />
          </Toolbar>
          <br />
          {Object.keys(this.state.cryptos).map(key => (
            <div id="crypto-container" key={key}>
              <span className="left">{key}</span>
              <span className="right">
                <NumberFormat
                  value={this.state.cryptos[key].USD}
                  displayType={"text"}
                  decimalScale={2}
                  thousandSeparator={true}
                  prefix={"$"}
                />{" "}
                {/* close number format */}
              </span>{" "}
              {/* close span className="right" */}
            </div> // close div id="crypto-container"
          ))}{" "}
          {/* close map(key=>; then map(key =>(; then {Object.keys */}
          <RaisedButtonSimple handleClick={this.getCurrentPriceData} />
          <br />
          <br />
        </div>{" "}
        {/*close className="coinList" */}
        <Paper style={paperStyle} zDepth={5}>
          <div className="Chart">
            <CryptoChart
              chartData={this.state.chartData}
              options={{ legend: { display: false } }}
            />
            {console.log("chart rendered: ", this.state.chartData)}
          </div>{" "}
          {/* close className="Chart" */}
        </Paper>
      </div> // close className="Home"
    ); // close return(
  } // close render() {}

  // ===== FUNCTIONS ===== //

  getCurrentPriceData = () => {
    console.log("getCurrentPriceData funtion called");
    // axios.defaults.headers.common = {};
    // axios.defaults.headers.common.accept = "application/json";
    fetch(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,BCH,IOT&tsyms=USD"
    )
      .then(res => res.json())
      .then(data => {
        const cryptos = data;
        console.log("getCurrentPriceData / cryptos: ", cryptos);
        this.setState({ cryptos: cryptos });
      });
  }; // close getCurrentPriceData = () => {

  getCryptoChartData = () => {
    var arrayTime = [];
    var arrayPrice = [];
    fetch(
      "https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=24&aggregate=1"
    )
      .then(res => res.json())
      .then(data => {
        console.log("data", data);
        const histData = data;
        for (var i = 0; i < histData.Data.length; i++) {
          var chartTimeUnix = moment.unix(histData.Data[i].time);
          var chartTimePretty = chartTimeUnix.format("MMM-DD HH:mm");
          arrayTime.push(chartTimePretty);
          arrayPrice.push(histData.Data[i].close);
        }
        this.setState({
          chartData: {
            labels: arrayTime,
            datasets: [
              {
                borderColor: "black",
                pointHoverBackgroundColor: "yellow",
                label: false,
                data: arrayPrice
              }
            ]
          } // close chartData
        }); // close this.setState({
      }); // close .then(res => {
  }; // close getCryptoChartData()

  // ===== END FUNCTIONS ===== //
} // close class Home extends Component

export default Home;
