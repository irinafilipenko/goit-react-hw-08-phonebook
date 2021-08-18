import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = () => {
  return axios.get(`/contacts`);
};

export const fetchAddContact = (contact) => {
  return axios.post(`/contacts`, contact);
};

export const fetchDeleteContact = (id) => {
  return axios.delete(`/contacts/${id}`);
};
