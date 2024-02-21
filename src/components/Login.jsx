import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [emailIsValid, setEmailIsValid] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();

    if (!emailIsValid) {
      setEmailIsValid(true);
      return;
    }

    console.log("sending http request...", enteredValues);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));

    if (identifier === "email") {
      setEmailIsValid(value.includes("@"));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
            required
            className={emailIsValid ? "" : "error-input"}
          />
          {!emailIsValid && (
            <p className="error-message">Please enter a valid email address</p>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredValues.password}
            required
          />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
};

export default Login;
