import axios from "axios";
const URL_LOGIN="/auth/login"
const URL_REGISTER="/auth/register"
const getAll = (url) => {
  return axios.get(url);
};
const getById = (url, id) => {
  return axios.get(`${url}/${id}`);
};
const login = (obj) => {
  return axios.post(URL_LOGIN, obj);
};
const register = (obj) => {
  return axios.post(URL_REGISTER, obj);
};
const addItem = (url, obj) => {
  return axios.post(url, obj);
};
const updateItem = (url, id, obj) => {
  return axios.put(`${url}/${id}`, obj);
};
const deleteItem = (url, id) => {
  return axios.delete(`${url}/${id}`);
};
const getUserFullData = (id) => {};

export { getAll, getById, addItem, updateItem, deleteItem, register, login };
