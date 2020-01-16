
import React from 'react'
import ReactDOM from 'react-dom'
import { observer, useObservable } from 'mobx-react-lite'
import userDTO from '../types/userDTO';


export const usersStore : userDTO[] = [
{name : 'test imp', address : 'test add'},
{name : 'test imp2', address : 'test add2'}
];

export const createStore = () => {
    const store = {
      company:'unicorn',
      count:1,
      get allusers() {
        return usersStore;
      }
    };
  
    return store;
  };


export type TStore = ReturnType<typeof createStore>