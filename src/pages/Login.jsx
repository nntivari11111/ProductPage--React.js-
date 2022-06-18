import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import style from "./login.module.css"
const Login = () => {
  const [loginCreds, setLoginCreds] = useState({
    email: "",
    password: "",
  });
  // id=eve.holt@reqres.in;
    // pass=cityslicka
  const { login } = useContext(AuthContext);

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginCreds.email && loginCreds.password) {
      login(loginCreds.email, loginCreds.password);
    }
  };
  return (
    <div>
      Login:
      <form
        onSubmit={handleSubmit}
        className={
         style.form
        }
      >
        <input
        
          name="email"
          type="email"
          placeholder="Enter Email"
          value={loginCreds.email}
          onChange={hanldeChange}
        />
        <input
    
          name="password"
          type="password"
          placeholder="Enter Password..."
          value={loginCreds.password}
          onChange={hanldeChange}
        />
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;