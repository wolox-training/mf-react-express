import api from 'config/api';

import LocalStorageService from './LocalStorageService';

export interface User {
  'access-token': string;
  client: string;
  uid: string;
}

export const setCurrentUser = (currentUser: User) => {
  LocalStorageService.setValue('accessToken', currentUser['access-token']);
  LocalStorageService.setValue('client', currentUser.client);
  LocalStorageService.setValue('uid', currentUser.uid);

  api.setHeaders({
    'access-token': currentUser['access-token'],
    client: currentUser.client,
    uid: currentUser.uid
  });
};

export const removeCurrentUser = () => {
  LocalStorageService.removeValue('accessToken');
  LocalStorageService.removeValue('client');
  LocalStorageService.removeValue('uid');
};
