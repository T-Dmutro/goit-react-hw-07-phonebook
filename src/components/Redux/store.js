import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { contactsApi } from './contacts/contactApi';
import filterReducer from './contacts/filterSlice';



export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
})


setupListeners(store.dispatch);






// ----------old-------------
// import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import  contactsReducer  from './contacts/contactsReducer';
// import storage from 'redux-persist/lib/storage';

// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ['filter'],
// };

// const store = configureStore({
//   reducer: {
//     contacts: persistReducer(contactsPersistConfig, contactsReducer ),
//   },
//   middleware: getDefaultMiddleware => [...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger],
//   devTools: process.env.NODE_ENV === 'development',
// });


