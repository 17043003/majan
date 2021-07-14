import { useState } from "react";

import user from '../state/User'

const LoginForm = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClick = async () => {
    user.login(email, password)
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
