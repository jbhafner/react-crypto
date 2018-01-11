import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './App.css';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NAVBar from './NAVBar.js';


class App extends Component {

 constructor(props) {
  super(props);

  this.state = {
    cryptos: []
  };
 } 

 componentDidMount() {
  this.updateData()
 }


  render() {

      console.log('NAVBar ', NAVBar);
      <NAVBar />
      return (
        <div className="App">

          {Object.keys(this.state.cryptos).map((key) => (

            <div id="crypto-container">
              <span className="left">{key}</span>
              <span className="right"><NumberFormat value={this.state.cryptos[key].USD} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'$'} /></span>
            </div>
            ))}
             <button onClick={this.updateData}>Update Data</button>

        </div>
      );

  }

  updateData = () => {
    console.log('updateData funtion called')
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({ cryptos: cryptos })
      })
  }  
 
}

export default App;
