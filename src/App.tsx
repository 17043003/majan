import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

import "./App.css";
import { endPoint } from "./Config";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Quiz from "./pages/Quiz";

import LogoutButton from "./components/LogoutButton";

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
        <Link to="/user">user</Link>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/user">
            <UserProfile />
          </Route>
          <Route exact path="/quiz">
            <Quiz />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
