import { useState } from "react";
import axios from "axios";

import { endPoint } from "../Config";

const LoginForm = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClick = async () => {
    const res = await axios.post(`${endPoint}auth`, {
      email: email,
      password: password,
    });
    console.log(res.data.jwt);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => onClick()}>login</button>
    </form>
  );
};

export default LoginForm;
