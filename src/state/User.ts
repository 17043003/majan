import axios from "axios";

import { endPoint } from "../Config";
import api from "../state/Api";

type UserInfoType = "isLoggedIn" | "jwt" | "id";

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
    this.set("id", res.data.id);
  };

  logout = () => {
    this.set("jwt", "");
    this.set("isLoggedIn", "false");
    api.setHeader({ Authorization: "" });
  };
}

export default new User();
