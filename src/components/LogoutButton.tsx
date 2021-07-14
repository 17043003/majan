import { useState } from "react";
import { Redirect } from "react-router-dom";

import user from "../state/User";

const LogoutButton = (): JSX.Element => {
  const [redirect, setRedirect] = useState(false);

  const onClick = async () => {
    await user.logout();
    if (!user.isLoggedIn()) {
      setRedirect(true); // ログアウト成功で、リダイレクト
    }
  };
  return (
    <>
      {redirect ? (
        <Redirect to="/login" />
      ) : (
        <button onClick={() => onClick()}>ログアウト</button>
      )}
    </>
  );
};

export default LogoutButton;
