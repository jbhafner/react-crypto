import React, { Component } from "react";
import { compose } from "redux";
import PropTypes from "prop-types";
import CreatableSelect from "react-select/lib/Creatable";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";

import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import classNames from "classnames";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import chroma from "chroma-js";

const dot = (color = "#ccc") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: " ",
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10
  }
});

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
          ? data.color
          : isFocused
            ? color.alpha(0.1).css()
            : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "white"
            : "black"
          : data.color,
      cursor: isDisabled ? "not-allowed" : "default"
    };
  },
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) })
};

class MyCoinsAutoComplete extends Component {
  state = {
    selectedOption: null,
    single: null,
    multi: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  // handleChange = name => value => {
  //   this.setState({
  //     [name]: value
  //   });
  // };

  render() {
    const { classes, theme } = this.props;
    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary
      })
    };

    console.log("this.props.allCoins", this.props);
    const coinlist = this.props.allCoins.map(coin => ({
      label: coin.name,
      value: coin.symbol
    }));
    const { selectedOption } = this.state;

    return (
      <CreatableSelect
        defaultValue={coinlist[0]}
        styles={colourStyles}
        value={selectedOption}
        onChange={this.handleChange}
        options={coinlist}
        placeholder="Search for a CryptoCoin"
      />
    );
  }
}

function mapStateToProps(state) {
  console.log("MyCoinsAutoComplete.js/state from mapStateToProps", state);
  console.log("state.coins.allCoins", state.coins.allCoins);
  return { allCoins: state.coins.allCoins };
}

console.log("this.props.allCoins", this.props);

// MyCoinsAutoComplete.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired
// };

export default compose(connect(mapStateToProps))(MyCoinsAutoComplete);
