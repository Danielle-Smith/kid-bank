import React, { Component } from 'react';
import NameDisplay from '../nameDisplay';

const Home = () => {

  return (
    <div className="app">
      <div className='home'>
        <h1 className="title">Piggy Bank</h1>
        <NameDisplay />
      </div>
    </div>
  );

}
export default Home;