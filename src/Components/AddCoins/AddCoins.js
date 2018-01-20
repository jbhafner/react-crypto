import React, { Component } from 'react';

import axios from "axios";

class AddCoins extends Component {
	constructor(props) {
		super(props);

		this.state = {
			coinList: []
		};
	}

  componentDidMount() {
    this.getCoins();
  }

	render() {
		return(
			<div>
				<h1>Choose Coins to add to your dashboard</h1>

				{Object.keys(this.state.coinList).map(key => (
					// <table id="header-row">
					// 	<tr>
					// 		<th>Crypto Code</th>
					// 		<th>Crypto Name</th>
					// 		<th>Select for List</th>
					// 	</tr>						
					// </table>
					<table id="coinList-container">
						<tr>
							<th>{key}</th>
							<th>{this.state.coinList[key].CoinName}</th>
							<th><input type="checkbox" /></th>
						</tr>
					</table>	
				))}
			</div>
		)
	}

  getCoins = () => {
    console.log("getCoins funtion called");
    axios
      .get(
        "https://cors.io/?https://www.cryptocompare.com/api/data/coinlist/")
      .then(res => {
        const coinList = res.data.Data;
        console.log('coinList: ', coinList);
        this.setState({ coinList: coinList });
      });
  };


}



export default AddCoins;