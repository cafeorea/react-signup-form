import React from "react";
import Card from "../UI/Card";
import styles from "./UserForm.module.css";
import Button from "../UI/Button";

const UserForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={styles.form}>
      <h1 className={`${styles.title}`}>試合申込</h1>
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
          <label>
            <input
              className={`${styles.radio}`}
              type="radio"
              id="male"
              name="gender"
            />{" "}
            男
          </label>
          <label>
            <input
              className={`${styles.radio}`}
              type="radio"
              id="female"
              name="gender"
            />{" "}
            女
          </label>
          <label>
            <input
              className={`${styles.radio}`}
              type="radio"
              id="other"
              name="gender"
            />{" "}
            その他
          </label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default UserForm;
