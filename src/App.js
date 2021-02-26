import React, { useEffect, useState } from "react";
import { Home, Nav, LoginForm } from "./components";
import axios from "axios";
import jwt_decode from "jwt-decode";
import useLocalStorage from "./useLocalStorage";

export default function App() {
  // -------------------authentication and authorization-------------------
  const api = axios.create({
    baseURL: `https://csfxlog-api.herokuapp.com/user/`,
  });

  const [loginValues, setLoginValues] = useState({ email: "", password: "" });
  const [token, setToken] = useLocalStorage(
    token,
    localStorage.getItem("token")
  );

  useEffect(() => {
    if (token) {
      const { exp } = jwt_decode(token);
      if (exp * 1000 < new Date().getTime()) {
        BridgeApi.messageApi.sendMessage({
          message: "Your account validity has expired, Contact Admin",
          title: "Error",
        });
        setToken(null);
      } else {
        setToken(token);
      }
    } else {
      BridgeApi.messageApi.sendMessage({
        message: "Session expired or not created, please login",
        title: "Error",
      });
    }
  }, [token]);

  // -------------------Handle login-------------------
  const handleLoginValues = (e) => {
    const { name, value } = e.target;
    setLoginValues({
      ...loginValues,
      [name]: value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("/login", {
      email: loginValues.email,
      password: loginValues.password,
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

  // -------------------App render-------------------
  return (
    <div>
      {token ? (
        <div>
          <Home />
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setToken(null);
            }}
          >
            Rem
          </button>
        </div>
      ) : (
        <LoginForm
          handleLoginValues={handleLoginValues}
          handleLoginSubmit={handleLoginSubmit}
          loginValues={loginValues}
        />
      )}
    </div>
  );
}
