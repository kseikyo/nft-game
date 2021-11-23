import { useEffect } from 'react';

// import { ethers } from 'ethers';

// import { CONTRACT_ADDRESS } from '../../constants';
// import Game from '../../utils/Game.json';
// import { transformCharacterData } from '../../utils/transformCharacterData';

interface SelectCharacterProps {
  text: string;
}

export const SelectCharacter: React.FC<SelectCharacterProps> = ({ text }) => {
  useEffect(() => {
    const { ethereum } = window;

    if (ethereum) {
      // const provider = new ethers.providers.Web3Provider(ethereum);
      // const signer = provider.getSigner();
      // const gameContract = new ethers.Contract(
      //   CONTRACT_ADDRESS,
      //   Game.abi,
      //   signer
      // );
      /*
       * This is the big difference. Set our gameContract in state.
       */
      // setGameContract(gameContract);
    } else {
      console.log('Ethereum object not found');
    }
  }, []);

  return (
    <div className="w-ful h-full flex flex-col items-center text-white mt-6">
      <h2 className="font-bold text-xl">{text}</h2>
    </div>
  );
};
