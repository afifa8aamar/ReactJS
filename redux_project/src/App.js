import React from 'react';
import './App.css';
import Display from './Display';
import Controls from './Controls';
import PrintList from './printList';

function App() {
  return (
    <div className="App">
      <Display />
      <Controls />
      <PrintList />
    </div>
  );
}

export default App;
