import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import { AuthorizationStatuses, NameSpace, UserProcess } from '../../types/state';
import { checkAuthorization } from '../api-actions/get-actions/get-actions';
import { InitialUserData } from '../../types/user-data';
import { logout } from '../api-actions/delete-actions';
import { loginAction } from '../api-actions/post-actions/post-action';

export const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatuses.undefined,
  userData: InitialUserData,
  errorMessage: '',
};

export const userProcess = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthorization.fulfilled || loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatuses.authorized;
        state.userData = action.payload;
      })
      .addCase(checkAuthorization.rejected || loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatuses.notAuthorized;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatuses.undefined;
      });
  }
});

export const {setErrorMessage} = userProcess.actions;
