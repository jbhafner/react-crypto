import React from "react";
import RaisedButton from "material-ui/RaisedButton";

const style = {
  margin: 12
};

const CalcButton = props => {
  console.log("CalcButton props ", props);
  return (
    <div onClick={props.handleClick}>
      <RaisedButton label="Calculate" primary={true} style={style} />
    </div>
  );
};

export default CalcButton;
