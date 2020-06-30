//libraries
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//actions
import { setUsersList, sortByField } from "../../../store/actions/users";
import { setSortFieldAndDirection } from "../../../store/actions/sortFieldAndDirection";

//dummy-data
import { USERS } from "../../../data/dummy-data";

//styles
import "./Table.scss";

//components
import TableColumn from "./TableColumn/TableColumn";
import TableHeader from "./TableHeader/TableHeader";

function Table() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const handleSortFieldAndDirectionChange = (field, direction) => {
    dispatch(setSortFieldAndDirection(field, direction));
    dispatch(sortByField(field, direction));
  };

  useEffect(() => {
    let localUsers = JSON.parse(localStorage.getItem("users"));
    if (localUsers) {
      dispatch(setUsersList(localUsers));
    } else {
      dispatch(setUsersList(USERS));
    }
    dispatch(setSortFieldAndDirection("name", 1));
  }, [dispatch]);

  return (
    <div className="TableContainer">
      {users.length > 0 ? (
        <table className="Table">
          <thead>
            <TableHeader
              handleSortFieldAndDirectionChange={
                handleSortFieldAndDirectionChange
              }
            />
          </thead>
          <tbody>
            {users.map((user, index) => (
              <TableColumn
                type="header"
                user={user}
                index={index + 1}
                key={user.id}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <p>There is no data to show</p>
        </div>
      )}
    </div>
  );
}

export default Table;
