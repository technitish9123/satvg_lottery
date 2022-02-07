import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import appReducer from './app/app.slice';
import userReducer from './user/user.slice';
import web3Reducer from './web3/web3.slice';

export const store = configureStore({
  reducer: {
    appState: appReducer,
    userState: userReducer,
    web3State: web3Reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['web3/updateWeb3State'],
      ignoredPaths: ['web3State.web3', 'web3State.provider'],
    },
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
