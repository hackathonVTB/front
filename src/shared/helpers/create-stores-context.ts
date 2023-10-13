import { createContext, useContext } from 'react';

const createStoresContext = <T>(stores: T) => {
  const context = createContext(stores);

  return () => useContext(context);
};

export { createStoresContext };
