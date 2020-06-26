//librarys
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

//styles
import "./TableHeader.scss";

//actions
import { sortByAge } from "../../../../store/actions/users";

//components
import TableCell from "../TableCell/TableCell";

function TableHeader() {
  const [isAccending, setIsAccending] = useState(null);

  const dispatch = useDispatch();

  const toggleAgeOrderDirection = () => {
    let order;
    if (isAccending !== null) {
      order = !isAccending;
      setIsAccending(order);
    } else {
      setIsAccending(true);
      order = true;
    }
    dispatch(sortByAge(order ? 1 : -1));
  };

  return (
    <tr className="TableHeader">
      <TableCell isHeader={true} className="sideChild">
        <p></p>
      </TableCell>
      <TableCell isHeader={true}>
        <p>First Name</p>
      </TableCell>
      <TableCell isHeader={true}>
        <p>Email</p>
      </TableCell>
      <TableCell isHeader={true}>
        <p>Phone Number</p>
      </TableCell>
      <TableCell className="ageContainer" isHeader={true}>
        <div className="age">
          <p>Age</p>
        </div>
        <div onClick={toggleAgeOrderDirection} className="arrowContainer">
          {isAccending || isAccending === null ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowUpIcon />
          )}
        </div>
      </TableCell>
      <TableCell isHeader={true}>
        <p>Gender</p>
      </TableCell>
      <TableCell isHeader={true} className="sideChild">
        <p></p>
      </TableCell>
    </tr>
  );
}

export default TableHeader;
