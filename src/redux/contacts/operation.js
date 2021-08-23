// import axios from "axios";
import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
  fetchEditContact,
} from "../../services/contactsApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   addContactError,
//   addContactRequest,
//   addContactSuccess,
//   deleteContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   fetchContactError,
//   fetchContactSuccess,
//   fetchContactRequest,
// } from './actions'

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const fetchContact = createAsyncThunk(
  "contacts/fetchContact",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",

  async ({ name, number }, { rejectWithValue }) => {
    try {
      const newContact = {
        name,
        number,
      };
      const { data } = await fetchAddContact(newContact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",

  async (id, { rejectWithValue }) => {
    try {
      await fetchDeleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async (item, { rejectWithValue }) => {
    try {
      const { data } = await fetchEditContact(item);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
