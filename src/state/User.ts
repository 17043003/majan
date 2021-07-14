import axios from "axios";

import { endPoint } from "../Config";

type UserInfoType = "isLoggedIn" | "jwt"

class User {
  set = (key: UserInfoType, value: string) => localStorage.setItem(key, value);
  get = (key: UserInfoType): string => localStorage.getItem(key) ?? "";

  isLoggedIn = (): boolean => this.get("isLoggedIn") === "true";

  login = async (email: string, password: string) => {
    const res = await axios.post(`${endPoint}auth`, {
      email: email,
      password: password,
    });
    this.set("jwt", res.data.jwt);
    this.set("isLoggedIn", "true");
  };

  logout = () => {
    this.set("jwt", "");
    this.set("isLoggedIn", "false");
  };
}

export default new User();
