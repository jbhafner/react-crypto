import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class XBTFairValueCalc extends Component {

	state = {
	   futPrice: 18020,
	   cashPrice: 17382.19,
	   numIntRate: 0.00,
	   denomIntRate: 1.4438,    
	   daysTilExpiry: 64,
	   contSize: 1	
	}

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
	   numIntRate: 0.00,
	   denomIntRate: 0.00,    
	   daysTilExpiry: 0,
	   contSize: 0.00
    });
    this.props.onChange({
	   futPrice: 0,
	   cashPrice: 0,
	   numIntRate: 0.00,
	   denomIntRate: 0.00,    
	   daysTilExpiry: 0,
	   contSize: 0.0
    });
  };	

	render() {
		return(

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
	          name="cashPrice"
	          hintText="Bitcoin Spot Price"
	          floatingLabelText="Bitcoin Spot Price"
	          value={this.state.cashPrice}
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
	          type="number"
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
	          type="number"
	          floatingLabelFixed
	        />
	        <br />        
	        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />

			</form>
		)
	}
}

export default XBTFairValueCalc;