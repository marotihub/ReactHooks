import React, { useState } from "react";
const ControlledComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onsubmit = () => {
    console.log("the name is " + name);
    console.log("the email is " + email);
  };

  return (
    <>
    <h1>Controlled Component example</h1>
      <form onSubmit={onsubmit}>
        <label>Name :</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br /> <br />
        <label>Email : </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button onClick={(e) => e.preventDefault()}>Submit</button>
      </form>
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
    </>
  );
};
export default ControlledComponent;
