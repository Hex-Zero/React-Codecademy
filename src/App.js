import React from 'react';
import './App.css';
import BusinessList from "../src/components/BusinessList/BusinessList";
import SearchBar from "../src/components/SearchBar/SearchBar";

function App() {
  return (
      <div className="App">
          <h1>ravenous</h1>
          <SearchBar />
          <BusinessList />
      </div>
  );
}

export default App;
