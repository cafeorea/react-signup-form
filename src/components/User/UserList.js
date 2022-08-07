import React from "react";
import styles from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.surname}, {user.firstName} ({user.gender})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
