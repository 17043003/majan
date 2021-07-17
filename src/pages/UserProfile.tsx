import { useEffect, useState } from "react";

import api from "../state/Api";
import { endPoint } from "../Config";

type UserProfileType = { [key: string]: string };

const UserProfile = (): JSX.Element => {
  const [userInfo, setUserInfo] = useState<UserProfileType>();
  const info: JSX.Element[] = [];

  useEffect(() => {
    api.getRequest(`${endPoint}user`).then((res) => {
      setUserInfo(res);
    });
  }, []);

  if (userInfo) {
    Object.keys(userInfo).map((key) => {
      info.push(
        <li key={key}>
          {key} : {userInfo[key]}
        </li>
      );
    });
  }

  return (
    <>
      <h1>UserInfo</h1>
      <ul>{info}</ul>
    </>
  );
};

export default UserProfile;
