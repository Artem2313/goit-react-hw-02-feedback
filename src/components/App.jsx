import React from 'react';
import items from '../db/publications.json';
import Reader from './reader/reader';

const App = () => {
  return <Reader items={items} />;
};

export default App;
