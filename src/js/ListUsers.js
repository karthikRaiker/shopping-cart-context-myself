import React, { useEffect, useState } from "react";

function ListUsers({ users }) {
  let [sortedObj, setSortedObj] = useState([]);

  useEffect(() => {
    setSortedObj(sortUsers(users));
  }, [users]);

  const sortUsers = (users) => {
    return users.sort((a, b) => {
      if (a.lastName < b.lastName) return -1;
      if (a.lastName > b.lastName) return 1;
      return 0;
    });
  };

  return (
    <div>
      <div className="user-count">Users: {sortedObj.length}</div>
      <ul className="user-list">
        {sortedObj.length
          ? sortedObj.map((item, i) => {
              return (
                <li key={i}>
                  {item.firstName} {item.lastName}
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}

export default ListUsers;
