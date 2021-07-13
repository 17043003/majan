import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import { endPoint } from "./Config";

function App(): JSX.Element {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    axios.get(endPoint).then((res) => {
      setMessage(res.data);
    });
  }, []);

  return <div className="App">{message}</div>;
}

export default App;
