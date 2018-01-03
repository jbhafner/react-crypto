import { Component } from 'react';
import axios from 'axios';

class UpdateFunctions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cryptos: []
        };
    } 

    updateData() {
        console.log('updateData funtion called')
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD')
            .then(res => {
                const cryptos = res.data;
                console.log(cryptos);
                this.setState({ cryptos: cryptos })
            })
    } 
}

export default UpdateFunctions