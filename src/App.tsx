import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import { endPoint } from "./Config";
import LoginForm from './components/LoginForm'

function App(): JSX.Element {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    axios.get(endPoint).then((res) => {
      setMessage(res.data);
    });
  }, []);

  return (
    <>
    <div className="App">{message}</div>
    <LoginForm />
    </>
  );
}

export default App;
