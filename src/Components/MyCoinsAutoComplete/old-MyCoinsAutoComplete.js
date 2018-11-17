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

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250
  },
  input: {
    display: "flex",
    padding: 0
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center"
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === "light"
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    )
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  singleValue: {
    fontSize: 16
  },
  placeholder: {
    position: "absolute",
    left: 2,
    fontSize: 16
  },
  paper: {
    marginTop: theme.spacing.unit
  },
  divider: {
    height: theme.spacing.unit * 2
  }
});

// ===== COMPONENTS OPTIONS =====

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused
      })}
      onDelete={event => {
        props.removeProps.onClick();
        props.removeProps.onMouseDown(event);
      }}
    />
  );
}

function Menu(props) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
}

const components = {
  Option,
  Control,
  NoOptionsMessage,
  Placeholder,
  SingleValue,
  MultiValue,
  ValueContainer,
  Menu
};

class MyCoinsAutoComplete extends Component {
  state = {
    selectedOption: null,
    single: null,
    multi: null
  };

  // handleChange = selectedOption => {
  //   this.setState({ selectedOption });
  //   console.log(`Option selected:`, selectedOption);
  // };

  handleChange = name => value => {
    this.setState({
      [name]: value
    });
  };

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
      <div className={classes.root}>
        <CreatableSelect
          classes={classes}
          value={this.state.single}
          onChange={this.handleChange("single")}
          options={coinlist}
          components={components}
          placeholder="Search for a CryptoCoin"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("MyCoinsAutoComplete.js/state from mapStateToProps", state);
  console.log("state.coins.allCoins", state.coins.allCoins);
  return { allCoins: state.coins.allCoins };
}

console.log("this.props.allCoins", this.props);

MyCoinsAutoComplete.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps)
)(MyCoinsAutoComplete);
