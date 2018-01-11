import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const RaisedButtonSimple = () => (
  <div>
    <RaisedButton label="Update" primary={true} style={style} />
    <br />
    <br />
    <RaisedButton label="Full width" fullWidth={true} />
  </div>
);

export default RaisedButtonSimple;