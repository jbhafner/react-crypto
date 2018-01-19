import React, { Component } from "react";
import TextField from "material-ui/TextField";
import CalcButton from "./CalcButton";
import Example from "./Example";
import Paper from "material-ui/Paper";

const paperStyle = {
  height: "85%",
  width: "85%",
  margin: "7%",
  textAlign: "center",
  display: "inline-block"
};

class XBTFairValueCalc extends Component {
  state = {
    futPrice: 18020,
    spotPrice: 17382.19,
    numIntRate: 0.0,
    denomIntRate: 1.4438,
    daysTilExpiry: 64,
    contSize: 1,
    fairSummary1: "",
    fairSummary2: "",
    fairSummary3: "",
    fairSummary4: ""            
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      futPrice: 0,
      cashPrice: 0,
      numIntRate: 0.0,
      denomIntRate: 0.0,
      daysTilExpiry: 0,
      contSize: 0.0
    });
    this.props.onChange({
      futPrice: 0,
      cashPrice: 0,
      numIntRate: 0.0,
      denomIntRate: 0.0,
      daysTilExpiry: 0,
      contSize: 0.0
    });
  };

  render() {
    return (

        <form>
          <h1>Bitcoin Futures Fair Value Calculator</h1>
          <TextField
            name="futPrice"
            hintText="Bitcoin Futures Price"
            floatingLabelText="Bitcoin Futures Price"
            value={this.state.futPrice}
            type="number"
            onChange={e => this.change(e)}
            floatingLabelFixed
          />
          <br />
          <TextField
            name="spotPrice"
            hintText="Bitcoin Spot Price"
            floatingLabelText="Bitcoin Spot Price"
            value={this.state.spotPrice}
            onChange={e => this.change(e)}
            type="number"
            floatingLabelFixed
          />
          <br />
          <TextField
            name="numIntRate"
            hintText="Bitcoin Interest Rate (zero for now)"
            floatingLabelText="Bitcoin Interest Rate (%)"
            value={this.state.numIntRate}
            type="number"
            onChange={e => this.change(e)}
            floatingLabelFixed
          />
          <br />
          <TextField
            name="denomIntRate"
            hintText="USD Int. Rate(%)"
            floatingLabelText="USD Int. Rate (%)"
            value={this.state.denomIntRate}
            type="number"
            onChange={e => this.change(e)}
            floatingLabelFixed
          />
          <br />
          <TextField
            name="daysTilExpiry"
            hintText="Days until contract expiry"
            floatingLabelText="Days until contract expiry"
            value={this.state.daysTilExpiry}
            type="number"
            onChange={e => this.change(e)}
            floatingLabelFixed
          />
          <br />
          <TextField
            name="contSize"
            hintText="Contract Size"
            floatingLabelText="Contract Size"
            value={this.state.contSize}
            type="number"
            onChange={e => this.change(e)}
            floatingLabelFixed
          />
          <br />
          <CalcButton label="Calculate" handleClick={this.calcData} />
          <div>
            Calc Results go here:
            {this.calcData.fvCalcResults}
            <Example 
              fairSummary1={this.state.fairSummary1}
              fairSummary2={this.state.fairSummary2}       
              fairSummary3={this.state.fairSummary3}    
              fairSummary4={this.state.fairSummary4}                                
            />
          </div>
        </form>

    );
  }

  calcData = () => {
    let spotTrade = 0;
    let denomFinCharge = 0;
    let numFinCharge = 0;
    let netCost = 0;
    let fairValueCalc = 0;
    let fairValueSpread = 0;
    let fairValueOverUnder = "";

    let fairSummary1;
    let fairSummary2;
    let fairSummary3;
    let fairSummary4;

    console.log("CalcData button clicked");
    console.log("state ", this.state);

    console.log("futures price ", this.state.futPrice);
    console.log("type of futPrice", typeof this.state.futPrice);

    console.log("contSize ", this.state.contSize);
    console.log("type of contSize", typeof this.state.contSize);
    console.log("spotPrice ", this.state.spotPrice);
    console.log("type of spotPrice", typeof this.state.spotPrice);

    spotTrade = this.state.contSize * this.state.spotPrice;
    denomFinCharge = parseFloat(
      spotTrade *
        (this.state.denomIntRate / 100 * (this.state.daysTilExpiry / 360))
    );
    numFinCharge =
      spotTrade *
      (this.state.numIntRate / 100 * (this.state.daysTilExpiry / 360));
    netCost = spotTrade + denomFinCharge - numFinCharge;
    fairValueCalc = netCost / this.state.contSize;

    fairValueSpread = this.state.futPrice - fairValueCalc;
    fairValueOverUnder = "";
    if (fairValueSpread > 0) {
      fairValueOverUnder = "Overpriced - Buy Spot / Sell Future(s)";
    } else {
      fairValueOverUnder = "Underpriced - Sell Spot / Buy Future(s)";
    }
    fairSummary1 = `Currency Pair: ${this.state.curPair} | Contract Size: ${
      this.state.contSize
    } | Days to Expiry ${this.state.daysTilExpiry} `;
    fairSummary2 = ` Int on XBT is +$${numFinCharge.toFixed(
      2
    )} @ ${this.state.numIntRate.toFixed(
      3
    )}%: | Int on USD is -$${denomFinCharge.toFixed(
      2
    )} @ ${this.state.denomIntRate.toFixed(5)}%:`;
    fairSummary3 = ` Spot Trade Cost: ${spotTrade.toLocaleString()} | Net Cost to buy and hold ${
      this.state.contSize
    } Bitcoin over ${
      this.state.daysTilExpiry
    } days is ${netCost.toLocaleString()} `;
    fairSummary4 = ` Fair Value: ${fairValueCalc.toFixed(5)} | Futures: ${
      this.state.futPrice
    } | Spread: ${fairValueSpread.toFixed(4)} | Futures ${fairValueOverUnder} `;

    console.log("spotTrade: ", spotTrade);
    console.log("denomFinCharge: ", denomFinCharge);
    console.log("numFinCharge: ", numFinCharge);
    console.log("netCost: ", netCost);
    console.log("fairValueCalc: ", fairValueCalc);

    console.log("================================");
    console.log(fairSummary1);
    console.log(fairSummary2);
    console.log(fairSummary3);
    console.log(fairSummary4);
    // $("#fairValueCalc1").html(fairSummary1);
    // $("#fairValueCalc2").html(fairSummary2);
    // $("#fairValueCalc3").html(fairSummary3);
    // $("#fairValueCalc4").html(fairSummary4);
    this.setState({
      fairSummary1,
      fairSummary2,
      fairSummary3,
      fairSummary4
    });
  };
}

export default XBTFairValueCalc;
