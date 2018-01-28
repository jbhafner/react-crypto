import React from 'react';

const Example = (props) => {
	console.log('props from Example.js ', props)
		return(

			<div className="calcOutput">
				{props.fairSummary1} <br/>
				{props.fairSummary2} <br/>
				{props.fairSummary3} <br/>
				{props.fairSummary4} <br/>
				{props.fairSummary5} <br/>				
			</div>
		)	
}

export default Example;