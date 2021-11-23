import { useCallback, useEffect } from 'react';

import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { AppContainer, Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { CONTRACT_ADDRESS } from '../constants';
import {
  SET_CHARACTER_NFT,
  SET_CURRENT_ACCOUNT,
  SET_ERROR,
} from '../context/actions';
import useGlobalContext from '../hooks/useGlobalContext';
import Game from '../utils/Game.json';
import {
  CharacterDataABI,
  transformCharacterData,
} from '../utils/transformCharacterData';

const Index = () => {
  const {
    state: { currentAccount },
    dispatch,
  } = useGlobalContext();

  const { t } = useTranslation('common');

  const checkIfWalletIsConnected = useCallback(async () => {
    try {
      const ethereum: any = await detectEthereumProvider();

      if (!ethereum) {
        console.log('Make sure you have MetaMask!');
        return;
      }
      console.log('We have the ethereum object', ethereum);

      /*
       * Check if we're authorized to access the user's wallet
       */
      const accounts = await ethereum.request({ method: 'eth_accounts' });

      /*
       * User can have multiple authorized accounts, we grab the first one if its there!
       */
      if (accounts.length !== 0) {
        const account: string = accounts[0];
        console.log('Found an authorized account:', account);
        dispatch({ type: SET_CURRENT_ACCOUNT, payload: account });
      } else {
        console.log('No authorized account found');
      }
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error as string });
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [checkIfWalletIsConnected]);

  useEffect(() => {
    /*
     * The function we will call that interacts with out smart contract
     */
    const fetchNFTMetadata = async () => {
      console.log('Checking for Character NFT on address:', currentAccount);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const gameContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        Game.abi,
        signer
      );

      const txn = await gameContract.checkIfUserHasNFT();
      if (txn.name) {
        console.log('User has character NFT');
        const payload = transformCharacterData(txn as CharacterDataABI);
        dispatch({
          type: SET_CHARACTER_NFT,
          payload,
        });
      } else {
        dispatch({ type: SET_ERROR, payload: 'No character NFT found' });
        console.log('No character NFT found');
      }
    };

    /*
     * We only want to run this, if we have a connected wallet
     */
    if (currentAccount) {
      console.log('CurrentAccount:', currentAccount);
      fetchNFTMetadata();
    }
  }, [currentAccount, dispatch]);

  return (
    <AppContainer>
      <Container>
        <Header
          title={t('emojiName')}
          subtitle={t('subtitle')}
          btnText={t('connectWallet')}
          selectCharacterText={t('selectCharacterText')}
        />
        <Footer />
      </Container>
    </AppContainer>
  );
};

export default Index;

interface GetStaticPropsProps {
  locale: string;
}

export async function getStaticProps({ locale }: GetStaticPropsProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      // Will be passed to the page component as props
    },
  };
}
