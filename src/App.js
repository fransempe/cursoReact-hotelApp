import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './App.css';
import 'bulma/css/bulma.min.css';

import Hero from './Components/Hero';
import Filters from './Components/Filters';

import { today, hotelsData } from './data';
import Hotels from './Components/Hotels';
import './config/momentConfig';

function App() {
  const filterInitialValues = {
    dateFrom: today,
    dateTo: new Date(today.valueOf() + 86400000),
    country: undefined,
    price: undefined,
    rooms: undefined,
  };

  const optionInitialValues = [
    { value: undefined, name: 'Cualquier Tamaño' },
    { value: 10, name: 'Hotel Pequeño' },
    { value: 20, name: 'Hotel Mediano' },
    { value: 30, name: 'Hotel Grande' },
  ];
  const [filters, setFilters] = useState(filterInitialValues);
  const [options, setOptions] = useState(optionInitialValues);
  const [hotels, setHotels] = useState(hotelsData);

  const handleChangeFilter = (e) => {
    const { name } = e.target;
    const { type } = e.target;
    const value = (type === 'date') ? moment(e.target.value) : e.target.value;

    setFilters({
      ...filters,
      [name]: value,
    });
  };

  useEffect(() => {
    let filteredHotels = hotelsData;

    if (filters.country && !(filters.country === 'Todos los países')) {
      filteredHotels = hotelsData.filter((hotel) => hotel.country === filters.country);
    }

    if (filters.country !== undefined) {  
      filteredHotels = filteredHotels.filter((hotel) => (
        moment(hotel.availabilityFrom).isSameOrBefore(filters.dateFrom, 'D')
              && moment(hotel.availabilityTo).isSameOrAfter(filters.dateTo, 'D')
      ));

      if (filters.price && !(filters.price === 'Cualquier precio')) {
        filteredHotels = hotelsData.filter((hotel) => hotel.price === parseInt(filters.price));
      }

      if (filters.country && !(filters.country === 'Todos los países')) {
        filteredHotels = hotelsData.filter((hotel) => hotel.country === filters.country);
      }

      if (filters.rooms && !(filters.rooms === 'Cualquier tamaño')) {
        switch (filters.rooms) {
          case '10':
            filteredHotels = hotelsData.filter((hotel) => hotel.rooms <= 10);
            break;

          case '20':
            filteredHotels = hotelsData.filter((hotel) => hotel.rooms > 10 && hotel.rooms <= 20);
            break;

          case '30':
            filteredHotels = hotelsData.filter((hotel) => hotel.rooms > 20);
            break;
          default:
            break;
        }
      }    
      setHotels(filteredHotels);
    }
  }, [filters]);

  return (
    <div>
      <Hero 
        dateFrom = {filters}
        dateTo={filters}
        filters={filters}
      />
      <Filters
        filters={filters}
        options={options}
        onChange={handleChangeFilter}
      />
      {/* hotels.filter(hotel => hotel.country === {filters}) */}
      <Hotels hotels={hotels} />
    </div>
  );
}

export default App;
