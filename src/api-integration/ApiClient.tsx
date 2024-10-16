import { Cookies } from "react-cookie";

export const baseURL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? "http://localhost:3000/"
    : process.env.NEXT_PUBLIC_FRONTEND_URL;

export class ApiClient {
  async request(
    method: string,
    endpoint: string,
    data?: any,
    params?: any,
    type?: string
  ) {
    let url = `${baseURL}api/${endpoint}`;

    Object.keys(params).forEach((key, index) => {
      url =
        index === 0
          ? `${url}?${key}=${params[key]}`
          : `${url}&${key}=${params[key]}`;
    });

    const cookie = new Cookies();

    const token = cookie.get("token");

    const tokenObject = { Authorization: `Bearer ${token}` };
    const contentType = (type === "" || type !== "formData") && {
      "Content-Type": "application/json",
    };

    const apiConfig = {
      withCredentials: true,
      headers: {
        Accept:
          type !== "" && type === "formData"
            ? "multipart/form-data"
            : "application/json",
        ...contentType,
        ...tokenObject,
      },
    };

    const body = method !== "GET" && {
      body: type !== "" && type === "formData" ? data : JSON.stringify(data),
    };

    console.log("env", process.env.NEXT_PUBLIC_ENVIRONMENT);

    console.log("Method", method);
    console.log("url", url);
    console.log("type", type);
    console.log("body", body);
    console.log("token", token);
    console.log("apiConfig", apiConfig);
    console.log("params", params);

    return await fetch(url, {
      ...apiConfig,
      method: method,
      ...body,
    })
      .then((response) => response.json())
      .catch((error) => error);
  }

  async post(endpoint = "", data: any, params: any = {}, type = "") {
    return this.request("POST", endpoint, data, params, type);
  }

  async get(endpoint = "", params: any = {}) {
    return this.request("GET", endpoint, null, params);
  }

  async put(endpoint = "", data: any, params: any = {}) {
    return this.request("PUT", endpoint, data, params);
  }

  async delete(endpoint = "", data: any, params: any = {}) {
    return this.request("DELETE", endpoint, data, params);
  }
}
