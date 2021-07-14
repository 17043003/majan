import { useState } from "react";
import { Redirect } from "react-router-dom";

import user from "../state/User";

const LoginForm = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [redirect, setRedirect] = useState(false);

  const onClick = async () => {
    await user.login(email, password);
    if (user.isLoggedIn()) {
      setRedirect(true); // ログイン成功で、リダイレクト
    }
  };

  return (
    <>
      {redirect ? (
        <Redirect to="/" />
      ) : (
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
      )}
    </>
  );
};

export default LoginForm;
