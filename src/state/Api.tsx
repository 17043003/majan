import axios from "axios";
import user from "./User";

interface HeaderType {
  [key: string]: string;
}

class Api {
  headers: HeaderType;
  constructor() {
    this.headers = {};
  }
  setHeader = (header: HeaderType) => {
    this.headers = { ...this.headers, ...header };
    console.log(this.headers);
  };

  getRequest = async (url: string) => {
    const res = await axios.get(url, {
      headers: {
        Authorization: `bearer ${user.get("jwt")}`,
      },
      data: {},
    });
    return res.data;
  };
  postRequest = async (
    url: string,
    data: { [key: string]: string | number }
  ) => {
    const res = await axios.post(url, data, {
      headers: {
        Authorization: `bearer ${user.get("jwt")}`,
      },
    });
    return res.data;
  };
}

export default new Api();
