import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const RaisedButtonSimple = () => (
  <div>
    <RaisedButton label="Update" primary={true} style={style} />
  </div>
);

export default RaisedButtonSimple;