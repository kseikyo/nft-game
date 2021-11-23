/* eslint-disable import/no-cycle */
import { useReducer, Dispatch, ReactNode } from 'react';

import { CharacterAttributes } from '../utils/transformCharacterData';
import {
  SET_CHARACTER_NFT,
  SET_CURRENT_ACCOUNT,
  SET_ERROR,
  SET_IS_LOADING,
} from './actions';
import { GlobalContext, initialState, GlobalStateType } from './GlobalContext';

export type GlobalActionType =
  | {
      type: typeof SET_CURRENT_ACCOUNT | typeof SET_ERROR;
      payload: string;
    }
  | {
      type: typeof SET_CHARACTER_NFT;
      payload: CharacterAttributes;
    }
  | {
      type: typeof SET_IS_LOADING;
      payload: boolean;
    };

export type GlobalContextType = {
  state: GlobalStateType;
  dispatch: Dispatch<GlobalActionType>;
};

const globalContextReducer = (
  state: GlobalStateType,
  action: GlobalActionType
): GlobalStateType => {
  switch (action.type) {
    case SET_CURRENT_ACCOUNT: {
      return {
        ...state,
        currentAccount: action.payload,
        error: '',
      };
    }
    case SET_CHARACTER_NFT: {
      return {
        ...state,
        characterNFT: action.payload,
        error: '',
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
};

export const GlobalProvider = (props: { children: ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer(globalContextReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
