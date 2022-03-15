import React, { useState } from "react";

function FormValidationReact() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const inputChange = (e) => {
    // console.log(e.target);   //it give the input element but we want only value and name inside the input element so destructure it below
    const {name, value}=e.target;
    //...formvalues takes the initialvalues and [name]:value is equal to e.target.name: e.target.value
    setFormValues({...formValues, [name]:value})
    console.log(name, value)
  };

  const handleSubmit=(e)=>{
      e.preventDefault()

  }

  return (
    <div>
        <pre>{JSON.stringify(formValues,undefined, 2)}</pre>
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <label>Username</label>
        <br />
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={inputChange}
          placeholder="Enter Username here"
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="text"
          name="email"
          value={formValues.email}
          onChange={inputChange}
          placeholder="Enter email here"
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={inputChange}
          placeholder="Enter Password here"
        /><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidationReact;
