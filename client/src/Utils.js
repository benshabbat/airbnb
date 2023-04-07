import axios from "axios";
const URL_LOGIN = "/auth/login";
const URL_LOGOUT = "/auth/logout";
const URL_REGISTER = "/auth/register";
const URL_UPLOAD_IMAGE_BY_LINK ="/places/upload-link"
const URL_UPLOAD ="/places/upload"
const URL_CREATE_PLACE ="/places"
const URL_PLACES ="/places"
const URL_PLACE ="/places/place"
const URL_BOOKING ="/bookings"


const getPlaces = () => {
  return axios.get(URL_PLACES);
};
const getById = (url, id) => {
  return axios.get(`${url}/${id}`);
};
const getPlacesByOwner = (id) => {
  return axios.get(`${URL_PLACES}/${id}`);
};
const getPlaceById = (id) => {
  return axios.get(`${URL_PLACE}/${id}`);
};
const login = (obj) => {
  return axios.post(URL_LOGIN, obj);
};
const logout = () => {
   axios.post(URL_LOGOUT);
   localStorage.removeItem("user");
};
const register = (obj) => {
  return axios.post(URL_REGISTER, obj);
};
const uploadImageByLink = (link) => {
  return axios.post(URL_UPLOAD_IMAGE_BY_LINK, link);
};
const uploadImages = (obj) => {
  return axios.post(URL_UPLOAD, obj,{
    headers:{"Content-Type":"multipart/form-data"}
  });
};
const createPlace = (obj,id) => {
  return axios.post(`${URL_CREATE_PLACE}/${id}`, obj);
};
const updatePlace = (obj,id) => {
  return axios.put(`${URL_PLACE}/${id}`, obj);
};
const createBooking = (obj,id) => {
  return axios.post(`${URL_BOOKING}/${id}`, obj);
};
const deleteItem = (url, id) => {
  return axios.delete(`${url}/${id}`);
};

export { createBooking,getPlaces,getPlaceById,getPlacesByOwner, getById, createPlace, updatePlace, deleteItem, register, login,logout,uploadImageByLink,uploadImages };
