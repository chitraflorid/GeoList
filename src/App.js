import React from 'react';
import { GeoProvider, GeoList } from './components/GeoList';
import './App.css';

function App() {
  return (
    <GeoProvider>
      <div className="App">
          <GeoList />
      </div>
    </GeoProvider>
  );
}

export default App;
