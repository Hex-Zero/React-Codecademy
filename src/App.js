import React from 'react';
import './App.css';
import BusinessList from "../src/components/BusinessList/BusinessList";
import SearchBar from "../src/components/SearchBar/SearchBar";
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [business,business,business,business,business,business];

function App() {
  return (
      <div className="App">
          <h1>ravenous</h1>
          <SearchBar />
          <BusinessList businesses={businesses}/>
      </div>
  );
}

export default App;
