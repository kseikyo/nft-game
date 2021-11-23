/* eslint-disable import/no-cycle */
import { createContext } from 'react';

import { CharacterAttributes } from '../utils/transformCharacterData';
import { GlobalContextType } from './GlobalProvider';

export type GlobalStateType = {
  currentAccount: string;
  characterNFT: CharacterAttributes;
  setCurrentAccount: () => undefined;

  error?: string;
  isLoading?: boolean;
};

/**
 * The initial state
 */
export const initialState: GlobalStateType = {
  currentAccount: '',
  characterNFT: {} as CharacterAttributes,
  setCurrentAccount: () => undefined,

  error: '',
  isLoading: false,
};

/**
 * The context
 */
export const GlobalContext = createContext<GlobalContextType>({
  state: initialState,
  dispatch: () => undefined,
});

export default GlobalContext;
