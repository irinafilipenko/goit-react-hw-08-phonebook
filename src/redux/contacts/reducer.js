// import { combineReducers } from 'redux'
// import { createReducer} from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContact,
  addContact,
  deleteContact,
  // editContact,
} from "./operation";

import { changeFilter } from "./actions";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
    loading: false,
    error: null,
    edit: null,
  },
  extraReducers: {
    [fetchContact.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.loading = false;
      state.error = null;
    },
    [fetchContact.pending]: (state) => {
      state.loading = true;
    },
    [fetchContact.error]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.items = [...state.items, payload];
      state.loading = false;
      state.error = null;
    },
    [addContact.pending]: (state) => {
      state.loading = true;
    },
    [addContact.error]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
      state.loading = false;
      state.error = null;
    },
    [deleteContact.pending]: (state) => {
      state.loading = true;
    },
    [deleteContact.error]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    // [editContact.fulfilled]: (state, { payload }) => {
    //   state.items = state.items.map((contact) =>
    //     contact.id === payload.id ? payload : contact,
    //   )
    //   state.edit = payload
    //   state.loading = false
    //   state.error = null
    // },
    [changeFilter]: (state, { payload }) => {
      state.filter = payload;
      state.loading = false;
    },
  },
});

export default contactSlice.reducer;

// const items = createReducer([], {
//   [fetchContact.fulfilled]: (_, { payload }) => payload,
//   [addContact.fulfilled]: (state, { payload }) => [...state, payload],
//   [deleteContact.fulfilled]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// })

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// })

// const loading = createReducer(false, {
//   [addContact.pending]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.error]: () => false,
//   [deleteContact.pending]: () => true,
//   [deleteContact.fulfilled]: () => false,
//   [deleteContact.error]: () => false,
//   [fetchContact.pending]: () => true,
//   [fetchContact.fulfilled]: () => false,
//   [fetchContact.error]: () => false,
// })

// const error = createReducer(null, {
//   [fetchContact.error]: (_, { payload }) => payload,
//   [fetchContact.pending]: () => null,
// })

//  export default combineReducers({ items, filter, loading, error })
