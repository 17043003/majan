import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import "./App.css";
import { endPoint } from "./Config";
import Login from "./pages/Login";
import LogoutButton from "./components/LogoutButton"

import user from "./state/User";

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

      <BrowserRouter>
        <>{user.isLoggedIn() ? <LogoutButton /> : <Redirect to="/login" />}</>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/user" >
            <UserProfile />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
