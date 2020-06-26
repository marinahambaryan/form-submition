//librarys
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//actions
import { setUsersList } from "../../../store/actions/users";

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

  useEffect(() => {
    dispatch(setUsersList(USERS));
  }, [dispatch]);

  return (
    <div className="TableContainer">
      {users.length > 0 ? (
        <table className="Table">
          <thead>
            <TableHeader />
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
