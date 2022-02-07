import { createSlice, Reducer } from '@reduxjs/toolkit';

import { reducers, extraReducers } from './user.reducers';
import * as Thunks from './user.thunks';

import { CHAINS } from '../../constants';

export interface IUserState {
  address: string;
  isLoggedIn: boolean;
  balance: string;
  chain: 'BSC' | 'POLY' | 'AVAX';
  chainId: number;
  theme: 'dark' | 'light';
}


const initialState: IUserState = {
  address: '',
  isLoggedIn: false,
  balance: '0',
  chain: 'BSC',
  chainId: CHAINS.BSC.chainIds[process.env.NEXT_PUBLIC_ENV ?? 'dev'],
  theme: 'dark',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder.addCase(Thunks.updateBalance.fulfilled, (state, action) =>
      extraReducers.updateBalance.fulfilled(state, action)
    );
  },
});

// Action Creators

export const actions = {
  updateUserInfo: userSlice.actions.updateUserInfo,
};

export default userSlice.reducer as Reducer<IUserState>;
