import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./UserForm.module.css";
import Button from "../UI/Button";

const UserForm = (props) => {
  const [surname, setSurname] = useState("");
  const [firstName, setFirstName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("off");

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      surname.trim().length === 0 ||
      firstName.trim().length === 0 ||
      !isNaN(birthday)
    ) {
      return;
    } else {
      console.log(`${surname}, ${firstName}, ${birthday}, ${gender}`);
      setSurname("");
      setFirstName("");
      setBirthday("");
      setGender("off");
    }
  };

  const surnameHandler = (event) => {
    setSurname(event.target.value);
  };

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const birthdayHandler = (event) => {
    setBirthday(event.target.value);
  };

  const genderHandler = (event) => {
    setGender(event.target.id);
  };

  return (
    <Card className={styles.form}>
      <h1 className={`${styles.title}`}>試合申込</h1>
      <form className={`${styles.input}`} onSubmit={submitHandler}>
        <div className={`${styles.name}`}>
          <div>
            <label htmlFor="surname">姓 </label>
            <input
              className={`${styles.box}`}
              id="surname"
              type="text"
              onChange={surnameHandler}
              value={surname}
            ></input>
          </div>
          <div>
            <label htmlFor="first-name">名 </label>
            <input
              className={`${styles.box}`}
              id="first-name"
              type="text"
              onChange={firstNameHandler}
              value={firstName}
            ></input>
          </div>
        </div>
        <div className={`${styles.age}`}>
          <label htmlFor="age">生年月日 </label>
          <input
            className={`${styles.box}`}
            id="age"
            type="date"
            onChange={birthdayHandler}
            value={birthday}
          ></input>
        </div>
        <div className={`${styles.gender}`}>
          <label>
            <input
              className={`${styles.radio}`}
              type="radio"
              id="male"
              name="gender"
              onChange={genderHandler}
              value={gender}
            />{" "}
            男
          </label>
          <label>
            <input
              className={`${styles.radio}`}
              type="radio"
              id="female"
              name="gender"
              onChange={genderHandler}
              value={gender}
            />{" "}
            女
          </label>
          <label>
            <input
              className={`${styles.radio}`}
              type="radio"
              id="other"
              name="gender"
              onChange={genderHandler}
              value={gender}
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
