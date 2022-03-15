import React, { useRef } from "react";

const UncontrolledComponent = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  function handleSubmit() {
    // console.log("Name value: " + nameRef.current.value);
    // console.log("Email value: " + emailRef.current.value);
    nameRef.current.focus();
    alert(`Name: ${nameRef.current.value},
 Email: ${emailRef.current.value}`);
  }
  return (
    <>
      <h1>Uncontrolled Component exmaple</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="name" id="name" ref={nameRef} />
        <br /> <br />
        <input type="email" name="email" id="email" ref={emailRef} />
        <br /> <br />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </>
  );
};

export default UncontrolledComponent;
