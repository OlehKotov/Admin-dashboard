import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./users/userSlice";
import pharmacyReducer from "./pharmacy/pharmacySlice";


const persistConfig = {
  key: 'root',
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    pharmacy: pharmacyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
