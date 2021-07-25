import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

import "./App.css";
import { endPoint } from "./Config";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";

import Quiz from "./pages/quiz/Index";
import NewQuiz from "./pages/quiz/New";

import LogoutButton from "./components/LogoutButton";

import user from "./state/User";

function App(): JSX.Element {
  const [message, setMessage] = useState<string>("");

  const AuthRouter = () => [
    <Route exact path="/login" component={Login} key={0} />,
  ];

  const UserRouter = () => [
    <Route exact path="/user" component={UserProfile} key={0} />,
  ];

  const QuizRouter = () => [
    <Route exact path="/quiz" component={Quiz} key={0} />,
    <Route exact path="/quiz/new" component={NewQuiz} key={1} />,
  ];

  useEffect(() => {
    axios.get(endPoint).then((res) => {
      setMessage(res.data);
    });
  }, []);

  return (
    <>
      <div className="App">{message}</div>

      <BrowserRouter>
        <ul>
          <li>
            {user.isLoggedIn() ? <LogoutButton /> : <Redirect to="/login" />}
          </li>
          <li>
            <Link to="/user">user</Link>
          </li>
          <li>
            <Link to="/quiz">何切る一覧</Link>
          </li>
        </ul>
        <Switch>
          {AuthRouter()}
          {UserRouter()}
          {QuizRouter()}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
