import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';

import { GlobalProvider } from '../context/GlobalProvider';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <GlobalProvider>
    <Component {...pageProps} />
  </GlobalProvider>
);

export default appWithTranslation(MyApp);
