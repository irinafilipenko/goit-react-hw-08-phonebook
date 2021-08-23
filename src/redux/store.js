import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/reducer";
import authReducer from "./auth/auth-slice";

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// }

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

  logger,
];

export const store = configureStore({
  reducer: {
    // contacts: persistReducer(persistConfig, contactsReducer),
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

// import { useForm, Controller } from 'react-hook-form'
// import { useSelector, useDispatch } from 'react-redux'
// import { useEffect } from 'react'
// import {
//   contactsOperations,
//   contactsSelectors,
//   contactsActions,
// } from 'redux/contacts'
// import InputMask from 'react-input-mask'
// import { toast } from 'react-toastify'
// import s from './ContactForm.module.css'
// import { Button } from '@material-ui/core'

// export default function ContactForm() {
//   const dispatch = useDispatch();
//   const contacts = useSelector(contactsSelectors.getContacts);
//   const contactEdit = useSelector(contactsSelectors.getContactEdit);
//   const {
//     register,
//     handleSubmit,
//     errors,
//     reset,
//     control,
//     setValue,
//   } = useForm();

//   useEffect(() => {
//     if (contactEdit) {
//       setValue('name', contactEdit.name);
//       setValue('number', contactEdit.number);
//     }
//   }, [contactEdit, setValue]);

//   const onSumbit = contact => {
//     if (contactEdit) {
//       const editContact = {
//         ...contact,
//         id: contactEdit.id,
//       };
//       reset();
//       dispatch(contactsActions.addContactEdit(null));
//       dispatch(contactsOperations.editContact(editContact));

//       return;
//     }

//     if (
//       contacts.find(
//         item => item.name.toLowerCase() === contact.name.toLowerCase(),
//       )
//     ) {
//       toast.info(`🙄 ${contact.name} is already in contacts!`);
//       return;
//     }

//     if (contacts.find(item => item.number === contact.number)) {
//       toast.info('This number is already in contacts!');
//       return;
//     }

//     dispatch(contactsOperations.addContact(contact));
//     reset();
//   };

//   return (
//     <form onSubmit={handleSubmit(onSumbit)}>
//       <label className={s.label}>
//         Name
//         <input
//           type="text"
//           name="name"
//           ref={register({
//             minLength: { value: 2, message: 'Too short name' },
//             maxLength: { value: 20, message: 'Too long name' },
//             required: 'Is a required field',
//           })}
//           className={s.input}
//           placeholder="Enter name"
//         />
//         {errors.name && <p className={s.errors}>{errors.name.message}</p>}
//       </label>
//       <label className={s.label}>
//         Number
//         <Controller
//           as={InputMask}
//           name="number"
//           rules={{
//             required: 'Phone number is required',
//           }}
//           defaultValue=""
//           control={control}
//           className={s.input}
//           placeholder="+38 (___) ___-__-__"
//           mask="+38 (999) 999-99-99"
//         />
//         {errors.number && <p className={s.errors}>{errors.number.message}</p>}
//       </label>

//       <Button type="submit" variant="contained" color="secondary">
//         {contactEdit ? 'Edit' : 'Add contact'}
//       </Button>
//     </form>
//   );
// }
