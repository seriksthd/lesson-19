import axios from "axios";

export const axionsInstance = axios.create({
  baseURL: "https://ca59d58dac44ac1a.mokky.dev",
  timeout: 1000,
  headers: {
    Accept: "appLication/json",
  },
});
