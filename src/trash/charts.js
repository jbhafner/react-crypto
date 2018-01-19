// import { Component } from 'react';
// import axios from 'axios';

class Charts {


        return(
            <div id="crypto-container">
                <span className="left">{key}</span>
                <span className="right"><NumberFormat this.props.value={this.state.cryptos[key].USD} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'$'} /></span>
            </div>
        )

}

export default Charts