export const TWITTER_HANDLE = 'lucasemanuelss';
export const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
export const CONTRACT_RINKEBY = process.env.CONTRACT_RINKEBY ?? '';
export const CONTRACT_MAIN_NET = process.env.CONTRACT_MAIN_NET ?? '';
export const CONTRACT_ADDRESS =
  process.env.NODE_ENV !== 'production' ? CONTRACT_RINKEBY : CONTRACT_MAIN_NET;
