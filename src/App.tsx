import React from 'react';
import logo from './logo.svg';
import './App.css';
import  UserView from './modules/user/user';
import Info from './modules/company/info';
import StoreProvider from './context';
const App: React.FC = () => {
  return (
    <StoreProvider>
    <div className="App">
      <header className="App-header">
       
        <UserView name="test name" address="test address"></UserView>
        <Info></Info>
      </header>
    </div>
    </StoreProvider>
  );
}

export default App;
