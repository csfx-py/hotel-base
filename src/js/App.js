import React, { useEffect, useState } from "react";
import { Home, Nav, LoginForm } from "./components";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default function App() {
  // -------------------authentication and authorization-------------------
  const api = axios.create({
    baseURL: `https://csfxlog-api.herokuapp.com/user/`,
  });

  const [values, setValues] = useState({ email: "", password: "" });
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    if (isFirst) {
      setIsFirst(false);
      if (token) {
        const { exp } = jwt_decode(token);
        if (exp * 1000 < new Date().getTime()) {
          BridgeApi.messageApi.sendMessage({
            message: "Your account validity has expired, Contact Admin",
            title: "Error",
          });
          localStorage.removeItem("token");
          setToken(null);
        }
      }
    } else {
      if (token) {
        const { exp } = jwt_decode(token);
        if (exp * 1000 < new Date().getTime()) {
          BridgeApi.messageApi.sendMessage({
            message: "Your account validity has expired, Contact Admin",
            title: "Error",
          });
          localStorage.removeItem("token");
          setToken(null);
        } else {
          localStorage.setItem("token", token);
        }
      } else {
        BridgeApi.messageApi.sendMessage({
          message: "Session expired, please login",
          title: "Error",
        });
      }
    }
  }, [token]);

  // -------------------Handle login-------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("/login", {
      email: values.email,
      password: values.password,
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
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          values={values}
        />
      )}
    </div>
  );
}
