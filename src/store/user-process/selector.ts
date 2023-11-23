
import {AuthorizationStatuses, NameSpace, State} from '../../types/state';
import { UserData } from '../../types/user-data';

export const getAuthorizationStatus = (state: Pick<State, NameSpace.user>): AuthorizationStatuses => state[NameSpace.user].authorizationStatus;
export const getUserData = (state: Pick<State, NameSpace.user>): UserData => state[NameSpace.user].userData;
export const errorMessage = (state: Pick<State, NameSpace.user>): string => state[NameSpace.user].errorMessage;
