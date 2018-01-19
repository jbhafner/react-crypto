import React from 'react';

const Example = (props) => {
	console.log('props from Example.js ', props)
		return(

			<div>
				{props.fairSummary1}
				{props.fairSummary2}
				{props.fairSummary3}
				{props.fairSummary4}
			</div>
		)	
}

export default Example;