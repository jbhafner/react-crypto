import React, { Component } from 'react';
import { Line } from "react-chartjs-2";

class CryptoChart extends Component {

	static defaultProps = {
		displayTitle: true,
		displayLegend: true,
		legendPosition: 'right'
	}

  render() {
  	 const data = this.props.chartData
    return (
    	<div className="chart">
			<Line
				data={data}
				options={{
					maintainAspectRatio: true,
					title: {
						display: this.props.displayTitle,
						text: 'Bitcoin 24 Hour Trading History',
						fontSize: 25
					},
					legend: {
						display: false,
						position: this.props.legendPosition
					}
				}}
			/>
		</div>
    )
  }
};

export default CryptoChart;