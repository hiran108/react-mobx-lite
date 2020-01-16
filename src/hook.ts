import {storeContext} from './default';
import {usersStore, TStore} from './store/userStore';
import React from 'react';
import { useObserver } from 'mobx-react-lite';

export const rootData = <Selection>(dataSelector: (store: TStore) => Selection) => UseStoreData(storeContext, contextData => contextData!, dataSelector);

function  UseStoreData<Selection, ContextData, Store>(
    context: React.Context<ContextData>,
    storeSelector: (contextData: ContextData) => Store,
    dataSelector: (store: Store) => Selection
  )  {
    const value = React.useContext(context);
    if (!value) {
      throw new Error();
    }
    const store = storeSelector(value);
    return useObserver(() => {
      return dataSelector(store);
    });
  };