import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css'

import Hero from './Components/Hero';
import Filters from './Components/Filters';

import { today, hotelsData } from  './data';
import Hotels from './Components/Hotels';


function App() {

  const filtersData = {
    dateFrom:  today,
    dateTo: new Date(today.valueOf() + 86400000),
    country: 'Argentina',
    price: 15,
    rooms: 3
  };

  const optionsData = [
    { value: undefined, name: 'Cualquier Tamaño' },
    { value: 10, name: 'Hotel Pequeño' },
    { value: 20, name: 'Hotel Mediano' },
    { value: 30, name: 'Hotel Grande' },
  ];
  
  const [filters, setFilters] = useState(filtersData)
  const [options, setOptions] = useState(optionsData)
  const [hotels, setHotels] = useState(hotelsData)

  const handleFilterChange = (e) => {
    console.log(e);
    // setFilters({
    //   ...filters,
    //   [e.target.name]: [e.target.value]
    // })
  }
  

  return (
      <div>
        <Hero
          dateFrom = {filters.dateFrom}
          filters={ filters } 
        />
        <Filters 
          filters={ filters } 
          options={options} 
          onFilterChange={ handleFilterChange }
        />
        <Hotels hotel={ hotels[0] } />
      </div>
    )
  
}

export default App;
