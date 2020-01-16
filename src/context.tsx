import React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import {createStore, TStore} from './store/userStore';
import userDTO from './types/userDTO';
import { storeContext } from './default';




export const StoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore(createStore);

  return (
    <storeContext.Provider value={store}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;