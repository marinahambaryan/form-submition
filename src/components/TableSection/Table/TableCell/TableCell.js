//libraries
import React from "react";

//styles
import "./TableCell.scss";

function TableCell(props) {
  return (
    <>
      {props.isHeader ? (
        <th className={props.className}>{props.children}</th>
      ) : (
        <td
          className={props.className}
          onClick={
            props.id
              ? () => props.handleDelete(props.id)
              : (e) => e.stopPropagation()
          }
        >
          {props.children}
        </td>
      )}
    </>
  );
}
export default TableCell;
