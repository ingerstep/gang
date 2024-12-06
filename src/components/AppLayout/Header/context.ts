import { createContext } from 'react';

type HeaderContextProps = {
  active: boolean;
  onClose: () => void;
  onOpen: () => void;
};

export const HeaderContext = createContext<HeaderContextProps>({} as HeaderContextProps);

export const HeaderContextProvider = HeaderContext.Provider;
