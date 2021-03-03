import { contextFactory } from 'config/context';

export interface State {
  accessToken: string;
  client: string;
  uid: string;
}

export const INITIAL_STATE = {
  accessToken: '',
  client: '',
  uid: ''
};

enum ActionTypes {
  SET_SESSION = 'SET_SESSION',
  CLOSE_SESSION = 'CLOSE_SESSION'
}

interface SetSession {
  type: ActionTypes.SET_SESSION;
  payload: {
    accessToken: string;
    client: string;
    uid: string;
  };
}

interface CloseSession {
  type: ActionTypes.CLOSE_SESSION;
}

export type Action = SetSession | CloseSession;

export const actionCreators = {
  setSession: (accessToken: string, client: string, uid: string): SetSession => ({
    type: ActionTypes.SET_SESSION,
    payload: { accessToken, client, uid }
  }),
  closeSession: (): CloseSession => ({ type: ActionTypes.CLOSE_SESSION })
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SET_SESSION: {
      return {
        ...state,
        accessToken: action.payload.accessToken,
        uid: action.payload.uid,
        client: action.payload.client
      };
    }
    case ActionTypes.CLOSE_SESSION: {
      return { ...state, accessToken: '', client: '', uid: '' };
    }
    default: {
      return state;
    }
  }
};

export const { useSelector, Context, useDispatch } = contextFactory<State, Action>(INITIAL_STATE);
