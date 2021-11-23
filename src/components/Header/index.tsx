import Image from 'next/image';

import useGlobalContext from '../../hooks/useGlobalContext';
import { ConnectButton } from '../Buttons/ConnectButton';
import { SelectCharacter } from '../SelelctCharacter';

interface HeaderProps {
  title: string;
  subtitle: string;
  btnText: string;
  selectCharacterText: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  selectCharacterText,
  btnText,
}) => {
  const {
    state: { currentAccount, characterNFT },
  } = useGlobalContext();
  const renderContent = () => {
    if (!currentAccount) {
      return (
        <div className="flex flex-col m-auto max-w-xl">
          <Image
            className="pb-5"
            src="/media/11-23-2021/yx5wKb.gif"
            alt="BIG CHUNK"
            width={300}
            height={300}
          />
          <ConnectButton>{btnText}</ConnectButton>
        </div>
      );
    }
    if (currentAccount && !characterNFT) {
      return <SelectCharacter text={selectCharacterText} />;
    }
    return null;
  };

  return (
    <div className="pt-8">
      <p className="m-0 text-5xl font-bold">{title}</p>
      <p className="text-2xl">{subtitle}</p>
      {renderContent()}
    </div>
  );
};
