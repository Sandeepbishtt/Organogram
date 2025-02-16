import * as React from "react";
import { Draggable } from "react-beautiful-dnd";

import makeStyles from "@material-ui/core/styles/makeStyles";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const useStyles = makeStyles({
  draggingListItem: {
    background: "rgb(235,235,235)",
  },
});

const VIewTableRow = ({ item, index }) => {
  const classes = useStyles();
  return (
    <TableRow
      className={classes.draggingListItem}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {item?.name}
      </TableCell>
      <TableCell>{item?.employeeId}</TableCell>
      <TableCell>{item?.name}</TableCell>
      <TableCell>{item?.designation}</TableCell>
      <TableCell>{item?.admin?.userLevel}</TableCell>
      <TableCell>{item?.admin?.managerName}</TableCell>
      <TableCell>{item?.functional?.managerName}</TableCell>
      <TableCell>{item?.squad}</TableCell>
    </TableRow>
  );
};

export default VIewTableRow;
