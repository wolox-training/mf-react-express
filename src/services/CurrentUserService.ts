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
};

export function getCurrentUser() {
  const token = LocalStorageService.getValue('accessToken');
  const client = LocalStorageService.getValue('client');
  const uid = LocalStorageService.getValue('uid');

  if (!token || !client || !uid) {
    return null;
  }

  return { token, client, uid };
}

export const removeCurrentUser = () => {
  LocalStorageService.removeValue('accessToken');
  LocalStorageService.removeValue('client');
  LocalStorageService.removeValue('uid');
};
