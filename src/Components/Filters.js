import React, { Component } from 'react'

import DateFilter from './DateFilter'
import OptionsFilter from './OptionsFilter'

class Filters extends Component {
    constructor(props){
        super(props)
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    handleOptionChange(event) {
         let payload = this.props.filters
         payload[event.target.name] = event.target.value
         this.props.onFilterChange(payload)
      }
      

    render() {
        const { filters, options } = this.props
        return (
                <nav className="navbar is-info" style= {{justifyContent:'center'} }>
                    <div className="navbar-item">
                        <DateFilter
                            date={filters.dateFrom}
                            icon="fas fa-sign-in-alt"
                            onDateChange= {this.handleOptionChange}
                            />
                    </div>
                    <div className="navbar-item">
                        <DateFilter
                            date={filters.dateTo}
                            icon="fas fa-sign-out-alt"
                        />
                    </div>
                    <div className="navbar-item">
                        <OptionsFilter options={[{ value: undefined, name: 'Todos los países'},
                                                { value: 'Argentina', name: 'Argentina'},
                                                { value: 'Brasil', name: 'Brasil'},
                                                { value: 'Chile', name: 'Chile'},
                                                { value: 'Uruguay', name: 'Uruguay'}
                                                ]}
                                        selected={filters.country}
                                        icon="fa fa-globe"
                        />
                    </div>
                    <div className="navbar-item">
                        <OptionsFilter options={[{value:undefined, name: 'Cualquier precio'},
                                                    {value:1, name: '$'},
                                                    {value:2, name: '$$'},
                                                    {value:3, name: '$$$'},
                                                    {value:4, name: '$$$$'},
                                                ]}
                                        selected={filters.price}
                                        icon="fa-dollar-sign" 
                        />
                    </div>
                    <div className="navbar-item">
                            <OptionsFilter options={ options }
                                            selected={ filters.rooms }
                                            icon="fa-bed" 
                        />
                    </div>

                </nav>
        )
    }
}

export default Filters
