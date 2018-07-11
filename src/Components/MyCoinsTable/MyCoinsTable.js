import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

function MyCoinsTable(props) {
  const { classes, myCoins, removeMyCoin } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell numeric>ID</TableCell>
            <TableCell numeric>Symbol</TableCell>
            <TableCell numeric>Name</TableCell>
            <TableCell>Purchase Date</TableCell>
            <TableCell numeric>Base Currency</TableCell>
            <TableCell numeric>Price</TableCell>
            <TableCell numeric>Amount</TableCell>
            <TableCell numeric>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myCoins.map(n => {
            return (
              <TableRow key={n._id}>
                <TableCell numeric>{n._id}</TableCell>
                <TableCell component="th" scope="row">
                  {n.symbol}
                </TableCell>
                <TableCell numeric>{n.name}</TableCell>
                <TableCell numeric>{n.purchDate}</TableCell>
                <TableCell numeric>{n.baseCurrency}</TableCell>
                <TableCell numeric>{n.price}</TableCell>
                <TableCell numeric>{n.amount}</TableCell>
                <TableCell numeric>{n.price * n.amount}</TableCell>
                <TableCell numeric>
                  <span>
                    <button onClick={removeMyCoin}>X</button>
                  </span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

MyCoinsTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyCoinsTable);

////////////////////////////////////////////
// import ReactTable from "react-table";

// render() {
//    const columns =[{
//       Header: "Purchased",
//       accessor: 'purchDate'
//    }, {
//       Header: "Symbol",
//       accessor: "symbol"
//    }, {
//       Header: "Crypto Name",
//       accessor: "name"
//    }, {
//       Header: "Base Currency",
//       accessor: "baseCurrency"
//    }, {
//       Header: "Price",
//       accessor: "price"
//    }, {
//       Header: "Total",
//       accessor: "total"
//    }]
// }
