//libraries
import React from "react";
import { useDispatch } from "react-redux";

//actions
import { openDialog } from "../../../../store/actions/dialog";

//styles
import "./TableColumn.scss";

//components
import TableCell from "../TableCell/TableCell";

function TableColumn(props) {
  const dispatch = useDispatch();

  const handleDelete = (userId) => {
    dispatch(openDialog("confirmDelete", userId));
  };

  return (
    <tr className="TableColumn">
      <TableCell className="index sideChild">
        <p>{props.index}</p>
      </TableCell>
      <TableCell>
        <p>{props.user.name}</p>
      </TableCell>
      <TableCell>
        <p>{props.user.email}</p>
      </TableCell>
      <TableCell>
        <p>{props.user.phoneNumber}</p>
      </TableCell>
      <TableCell>
        <p>{props.user.age}</p>
      </TableCell>
      <TableCell>
        <p>{props.user.gender}</p>
      </TableCell>
      <TableCell
        handleDelete={handleDelete}
        id={props.user.id}
        className="sideChild"
      >
        <span>&#10005;</span>
      </TableCell>
    </tr>
  );
}

export default TableColumn;
