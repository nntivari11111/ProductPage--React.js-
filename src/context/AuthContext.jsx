import React, {useEffect } from "react";
import {createContext} from "react";
import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState("");
  const navigate = useNavigate();

 
  const login = (email, password) => {
    axios
      .post("https://reqres.in/api/login", { email, password })
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        setIsAuth(data.token);
      });
  };

  const logout = () => {
    localStorage.setItem("token", "");
    setIsAuth(false);
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/cart");
    } else {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
