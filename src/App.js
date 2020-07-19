import React, { useState } from 'react';
import moment from 'moment'
import './App.css';
import 'bulma/css/bulma.min.css'

import Hero from './Components/Hero';
import Filters from './Components/Filters';

import { today, hotelsData } from  './data';
import Hotels from './Components/Hotels';
import './config/momentConfig'

function App() {

  const filterInitialValues = {
    dateFrom:  today,
    dateTo: new Date(today.valueOf() + 86400000),
    country: 'Argentina',
    price: 15,
    rooms: 3
  };

  const optionInitialValues = [
    { value: undefined, name: 'Cualquier Tamaño' },
    { value: 10, name: 'Hotel Pequeño' },
    { value: 20, name: 'Hotel Mediano' },
    { value: 30, name: 'Hotel Grande' },
  ];
  
  const [filters, setFilters] = useState(filterInitialValues)
  const [options, setOptions] = useState(optionInitialValues)
  const [hotels, setHotels] = useState(hotelsData)

  const handleChangeFilter = (e) => {
    const name = e.target.name
    const type = e.target.type
    const value = (type === 'date') ? moment( e.target.value ) : e.target.value    

    setFilters({
      ...filters,
      [name] : value
    })
    
  }
  

  return (
      <div>
        <Hero
          dateFrom = { filters }
          dateTo = { filters }
          filters = { filters } 
        />
        <Filters 
          filters={ filters } 
          options={options}
          onChange = { handleChangeFilter }
        />
        <Hotels hotel={ hotels[0] } />
      </div>
    )
  
}

export default App;
