import React from "react";

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="email"
          name="email"
          id=""
          placeholder="email"
          value={props.values.email}
          onChange={props.handleChange}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="pass"
          value={props.values.password}
          onChange={props.handleChange}
        />
        <br />
        <button type="submit">log</button>
      </form>
      {/* login */}
    </div>
  );
};

export default LoginForm;
