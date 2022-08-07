import React from "react";
import Card from "../UI/Card";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={styles.form}>
      <form className={`${styles.input}`} onSubmit={submitHandler}>
        <div className={`${styles.name}`}>
          <div>
            <label htmlFor="surname">姓 </label>
            <input className={`${styles.box}`} id="surname" type="text"></input>
          </div>
          <div>
            <label htmlFor="first-name">名 </label>
            <input
              className={`${styles.box}`}
              id="first-name"
              type="text"
            ></input>
          </div>
        </div>
        <div className={`${styles.age}`}>
          <label htmlFor="age">生年月日 </label>
          <input className={`${styles.box}`} id="age" type="date"></input>
        </div>
        <div className={`${styles.gender}`}>
          <input type="radio" id="male" name="gender" />
          男
          <input type="radio" id="female" name="gender" />
          女
          <input type="radio" id="other" name="gender" />
          その他
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default UserForm;
