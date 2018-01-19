import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const RaisedButtonSimple = (props) => {
	console.log('props ', props)
  return (
	  <div onClick={props.handleClick}>
	    <RaisedButton label="Update" primary={true} style={style} />
	  </div>
  )
};

export default RaisedButtonSimple;