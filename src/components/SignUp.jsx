import React, { useState } from "react";

const Signup = () => {
  const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = {
      email: fd.get("email"),
      password: fd.get("password"),
      confirmPassword: fd.get("confirm-password"),
    };

    if (data.password !== data.confirmPassword) {
      setPasswordsAreNotEqual(true);
      return;
    }
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

<div className="control">
        <label htmlFor="text">Full Name</label>
        <input id="text" type="text" name="text" required />
      </div>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </div>

      <div className="control">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          required
          minLength={6}
        />
      </div>

      <div className="control">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          id="confirm-password"
          type="password"
          name="confirm-password"
          required
        />
        {passwordsAreNotEqual && <div className="control-error"><p>Passwords is incorrect...</p></div>}
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
};

export default Signup;
