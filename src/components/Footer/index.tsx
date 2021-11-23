import Image from 'next/image';

import twitterLogo from '../../../public/assets/twitter-logo.svg';
import { TWITTER_LINK, TWITTER_HANDLE } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <div className="flex justify-center items-center pb-8">
      <Image
        className=""
        src={twitterLogo}
        width={35}
        height={35}
        alt="Twitter logo"
      />
      <a
        className="text-base font-bold"
        href={TWITTER_LINK}
        target="_blank"
        rel="noreferrer"
      >{`built by @${TWITTER_HANDLE}`}</a>
    </div>
  );
};
