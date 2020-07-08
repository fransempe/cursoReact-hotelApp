import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/react-fontawesome'

import Hero from './Components/Hero';
import Filters from './Components/Filters';

import { hotelsData } from  './data';


class App extends Component {
  constructor() {
    super();

    this.state = {
      filters: {
        dateFrom : '03/07/2020',
        dateTo : '14/07/2020',
        country : 'Argentina',
        price : '$1.200',
        rooms : '4'
      },
      options: [
        { value: undefined, name: 'Cualquier Tamaño' },
        { value: 10, name: 'Hotel Pequeño' },
        { value: 20, name: 'Hotel Mediano' },
        { value: 30, name: 'Hotel Grande' },
      ] 

        
    }
    console.log(hotelsData);
  }
  
  render() {
    return (
      <div>
        <Hero filters={ this.state.filters } />
        <Filters filters={ this.state.filters } options={this.state.options} />
      </div>
    )
  }
}

export default App;
