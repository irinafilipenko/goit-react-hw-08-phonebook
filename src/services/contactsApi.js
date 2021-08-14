import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = () => {
  return axios.get(`/contacts`);
};

export const fetchAddContact = (contact) => {
  return axios.post(`https://connections-api.herokuapp.com/contacts`, contact);
};

export const fetchDeleteContact = (id) => {
  return axios.delete(`https://connections-api.herokuapp.com/contacts/${id}`);
};
