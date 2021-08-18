// import axios from "axios";
import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
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
      // axios.get("./contacts");
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
      // axios.post('./contacts', newContact)
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
      // axios.delete(`./contacts/${id}`)

      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const deleteContact = (id) => (dispatch) => {
//   dispatch(deleteContactRequest())

//   axios
//     .delete(`./contacts/${id}`)
//     .then(() => dispatch(deleteContactSuccess(id)))
//     .catch((error) => dispatch(deleteContactError(error)))
// }

// export const fetchContact = () => async (dispatch) => {
//   dispatch(fetchContactRequest())

//   try {
//     const { data } = await axios.get('./contacts')
//     dispatch(fetchContactSuccess(data))
//   } catch (error) {
//     dispatch(fetchContactError(error))
//   }
// }

// export const addContact = ({ name, number }) => async (dispatch) => {
//   const newContact = {
//     name,
//     number,
//   }

//   dispatch(addContactRequest())

//   try {
//     const { data } = await axios.post('./contacts', newContact)
//     dispatch(addContactSuccess(data))
//   } catch (error) {
//     dispatch(addContactError(error))
//   }

// }
