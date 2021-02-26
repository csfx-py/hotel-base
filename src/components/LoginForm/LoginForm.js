import React from "react";

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleLoginSubmit}>
        <input
          type="email"
          name="email"
          id=""
          placeholder="email"
          value={props.loginValues.email}
          onChange={props.handleLoginValues}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="pass"
          value={props.loginValues.password}
          onChange={props.handleLoginValues}
        />
        <br />
        <button type="submit">log</button>
      </form>
      {/* login */}
    </div>
  );
};

export default LoginForm;
