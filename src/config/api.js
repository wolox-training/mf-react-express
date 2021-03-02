import { create } from 'apisauce';
import { SnakecaseSerializer, CamelcaseSerializer } from 'cerealizr';

const baseURL = 'http://wolox.com';

const snakecaseSerializer = new SnakecaseSerializer();
const camelCaseSerializer = new CamelcaseSerializer();

if (baseURL === 'http://wolox.com') {
  console.warn('API baseURL has not been properly initialized'); // eslint-disable-line no-console
}

const STATUS_CODES = {
  unauthorized: 401
};

const api = create({
  /*
   * TODO Add this if you need it
   * baseURL: process.env.API_BASE_URL,
   */
  baseURL,
  timeout: 15000
});

api.setBaseURL('https://books-training-rails.herokuapp.com');

api.addRequestTransform(request => {
  if (request.params) {
    request.params = snakecaseSerializer.serialize(request.params);
  }
  if (request.data) {
    request.data = snakecaseSerializer.serialize(request.data);
  }
});

api.addMonitor(response => {
  if (response.data) {
    response.data = camelCaseSerializer.serialize(response.data);
  }
});

// eslint-disable-next-line no-unused-vars, prettier/prettier, @typescript-eslint/no-unused-vars
export const apiSetup = dispatch => {
  api.addMonitor(response => {
    if (response.status === STATUS_CODES.unauthorized) {
      /*
       * TODO: These callbacks should only be called if no other callback was asigned for the response.
       * - dispatch(alertActions.error(i18next.t('apiErrors:expired')));
       */
    }
  });

  api.addMonitor(response => {
    if (response.problem === 'NETWORK_ERROR') {
      // TODO: These callbacks should only be called if no other callback was asigned for the response.
    }
  });
};

export default api;
