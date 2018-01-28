import React, { Component } from 'react';

import axios from "axios";

class AddCoins extends Component {

  // componentDidMount() {
  //   this.getCoins();
  // }

	render() {
		return(
			<div>
				<h1>Coming Soon</h1>
				<h3>Create your own list of coins to track</h3>
			</div>	
		)
	}

//   getCoins = () => {
//     console.log("getCoins funtion called");
//     axios
//       .get(
//         "https://cors.io/?https://www.cryptocompare.com/api/data/coinlist/")
//       .then(res => {
//         const coinList = res.data.Data;
//         console.log('coinList: ', coinList);
//         this.setState({ coinList: coinList });
//       });
//   };


}



export default AddCoins;