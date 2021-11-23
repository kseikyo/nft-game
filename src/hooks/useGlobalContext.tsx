import { useContext } from 'react';

import { GlobalContext } from '../context/GlobalContext';
import { GlobalContextType } from '../context/GlobalProvider';

const useGlobalContext = (): GlobalContextType => useContext(GlobalContext);

export default useGlobalContext;
