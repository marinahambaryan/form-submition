//libraries
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

//styles
import "./TableHeader.scss";

//actions
import { sortByField } from "../../../../store/actions/users";
import { setFieldsDirections } from "../../../../store/actions/fieldsDirections";

//components
import TableCell from "../TableCell/TableCell";

function TableHeader(props) {
  const dispatch = useDispatch();
  const fieldsDirections = useSelector((state) => state.fieldsDirections);

  const [isNameAscending, setIsNameAscending] = useState(null);
  const [isEmailAscending, setIsEmailAscending] = useState(null);
  const [isPhoneNumberAscending, setIsPhoneNumberAscending] = useState(null);
  const [isAgeAscending, setIsAgeAscending] = useState(null);
  const [isGenderAscending, setIsGenderAscending] = useState(null);

  const toggleFieldOrderDirection = (field, isAscending) => {
    let order;
    if (isAscending !== null) {
      order = !isAscending;
    } else {
      order = true;
    }
    dispatch(setFieldsDirections(field, order));
    dispatch(sortByField(field, order ? 1 : -1));
    props.handleSortFieldAndDirectionChange(field, order ? 1 : -1);
  };

  useEffect(() => {
    setIsNameAscending(fieldsDirections["name"].isAscending);
    setIsEmailAscending(fieldsDirections["email"].isAscending);
    setIsPhoneNumberAscending(fieldsDirections["phoneNumber"].isAscending);
    setIsAgeAscending(fieldsDirections["age"].isAscending);
    setIsGenderAscending(fieldsDirections["gender"].isAscending);
  }, [fieldsDirections]);

  return (
    <tr className="TableHeader">
      <TableCell isHeader={true} className="sideChild">
        <p></p>
      </TableCell>
      <TableCell isHeader={true}>
        <div className="headerCellContainer">
          <div className="fieldNameContainer">
            <p>Full Name</p>
          </div>
          <div
            onClick={() => toggleFieldOrderDirection("name", isNameAscending)}
            className="arrowContainer"
          >
            {isNameAscending || isNameAscending === null ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowUpIcon />
            )}
          </div>
        </div>
      </TableCell>
      <TableCell isHeader={true}>
        <div className="headerCellContainer">
          <div className="fieldNameContainer">
            <p>Email</p>
          </div>
          <div
            onClick={() => toggleFieldOrderDirection("email", isEmailAscending)}
            className="arrowContainer"
          >
            {isEmailAscending || isEmailAscending === null ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowUpIcon />
            )}
          </div>
        </div>
      </TableCell>
      <TableCell isHeader={true}>
        <div className="headerCellContainer">
          <div className="fieldNameContainer">
            <p>Phone Number</p>
          </div>
          <div
            onClick={() =>
              toggleFieldOrderDirection("phoneNumber", isPhoneNumberAscending)
            }
            className="arrowContainer"
          >
            {isPhoneNumberAscending || isPhoneNumberAscending === null ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowUpIcon />
            )}
          </div>
        </div>
      </TableCell>
      <TableCell isHeader={true}>
        <div className="headerCellContainer">
          <div className="fieldNameContainer">
            <p>Age</p>
          </div>
          <div
            onClick={() => toggleFieldOrderDirection("age", isAgeAscending)}
            className="arrowContainer"
          >
            {isAgeAscending || isAgeAscending === null ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowUpIcon />
            )}
          </div>
        </div>
      </TableCell>
      <TableCell isHeader={true}>
        <div className="headerCellContainer">
          <div className="fieldNameContainer">
            <p>Gender</p>
          </div>
          <div
            onClick={() =>
              toggleFieldOrderDirection("gender", isGenderAscending)
            }
            className="arrowContainer"
          >
            {isGenderAscending || isGenderAscending === null ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowUpIcon />
            )}
          </div>
        </div>
      </TableCell>
      <TableCell isHeader={true} className="sideChild">
        <p></p>
      </TableCell>
    </tr>
  );
}

export default TableHeader;
