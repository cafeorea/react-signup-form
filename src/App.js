import React from "react";
import UserForm from "./components/User/UserForm";
import UserList from "./components/User/UserList";

function App() {
  return (
    <div>
      <UserForm />
      <UserList users={[]} />
    </div>
  );
}

export default App;
