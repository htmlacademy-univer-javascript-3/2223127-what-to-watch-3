import axios, {AxiosInstance, AxiosError} from 'axios';
import {StatusCodes} from 'http-status-codes';
import { changeAuthStatus, redirectToRoute, setErrorMessage } from '../store/action';
import { store } from '../store';
import { AuthorizationStatuses } from '../types/state';

type DetailMessageType = {
  type: string;
  message: string;
  details: [{
    messages: string[];
  }];
}

const BACKEND_URL = 'https://13.design.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    config.headers = config.headers ?? {};
    const json = localStorage.getItem('token') || '';
    if (json) {
      config.headers['x-token'] = JSON.parse(json) as string;
    }
    return config;
  }, (error) => Promise.reject(error));

  api.interceptors.response.use(
    (response) => {
      store.dispatch(setErrorMessage(''));
      return response;
    },
    (error: AxiosError<DetailMessageType>) => {
      if (error.response?.status === StatusCodes.UNAUTHORIZED) {
        store.dispatch(changeAuthStatus(AuthorizationStatuses.notAuthorized));
      }
      if(error.response?.status === StatusCodes.BAD_REQUEST){
        const errorData = error.response.data.details;
        const message = errorData.map((data) => data.messages.join(', ')).join(', ');
        store.dispatch(setErrorMessage(message));
      }
      if(error.response?.status === StatusCodes.NOT_FOUND){
        store.dispatch(redirectToRoute('/notFound'));
      }
      throw error;
    }
  );

  return api;
};

