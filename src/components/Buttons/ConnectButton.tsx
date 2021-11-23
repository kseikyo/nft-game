import React, { ButtonHTMLAttributes } from 'react';

import detectEthereumProvider from '@metamask/detect-provider';

import { SET_CURRENT_ACCOUNT, SET_ERROR } from '../../context/actions';
import useGlobalContext from '../../hooks/useGlobalContext';
import { CtaButton } from './CtaButton';

export const ConnectButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> =
  ({ children, className, ...props }) => {
    const { dispatch } = useGlobalContext();

    const connectWalletAction = async () => {
      try {
        const ethereum: any = await detectEthereumProvider();

        if (!ethereum) {
          alert('Get MetaMask!');
          return;
        }

        /*
         * Fancy method to request access to account.
         */
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts',
        });

        /*
         * Boom! This should print out public address once we authorize Metamask.
         */
        console.log('Connected', accounts[0]);
        dispatch({ type: SET_CURRENT_ACCOUNT, payload: accounts[0] });
      } catch (error) {
        dispatch({ type: SET_ERROR, payload: error as string });
        console.log(error);
      }
    };

    return (
      <CtaButton
        className={`bg-gradient-to-r from-yellow-600 to-red-600 ${
          className ?? ''
        }`}
        onClick={connectWalletAction}
        {...props}
      >
        {children}
      </CtaButton>
    );
  };
