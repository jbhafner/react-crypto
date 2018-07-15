import axios from "axios";

export function setTokenHeader(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

export function apiCall(method, path, data) {
  console.log("method = ", method, "path - ", path, "data - ", data);
  return new Promise((resolve, reject) => {
    console.log("method.toLowerCase", method, "path", path, "data", data);
    return axios[method.toLowerCase()](path, data)
      .then(res => {
        console.log("api.js - res", res);
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err.response.data.error);
      });
  });
}
