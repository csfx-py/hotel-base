import React, { useState } from "react";
import axios from "axios";

function App() {
  const api = axios.create({
    baseURL: `https://csfxlog-api.herokuapp.com/user/`,
  });

  const [token, setToken] = useState(undefined);

  const loginReq = async () => {
    let res = await api.post("/login", {
      email: "test4@test.com",
      password: "test123",
    });
    if (res.data.auth) {
      setToken(res.data.token);
    } else {
      BridgeApi.messageApi.sendMessage({
        message: res.data.message,
        title: "Error",
      });
    }
  };

  return (
    <div>
      <p>{token}</p>
      <button onClick={loginReq}>log</button>
    </div>
  );
}

export default App;
