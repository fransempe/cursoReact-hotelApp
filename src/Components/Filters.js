import React, { Component } from 'react'

import DateFilter from './DateFilter'
import OptionsFilter from './OptionsFilter'

class Filters extends Component {
    constructor(props){
        super(props)
    }

    handleOptionChange(event) {
         let payload = this.props.filters
         payload[event.target.name] = event.target.value
         this.props.onFilterChange(payload)
      }
      

    render() {
        const { filters, options, onChange } = this.props
        return (
                <nav className="navbar is-info" style= {{justifyContent:'center'} }>
                    <div className="navbar-item">
                        <DateFilter
                            date={filters.dateFrom}
                            icon="fas fa-sign-in-alt"
                            onChange = { onChange }
                            name = 'dateFrom'
                            />
                    </div>
                    <div className="navbar-item">
                        <DateFilter
                            date={filters.dateTo}
                            icon="fas fa-sign-out-alt"
                            onChange = { onChange }
                            name = 'dateTo'
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
                                        onChange = { onChange }
                                        name = 'country'
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
                                        onChange = {onChange}
                                        name = 'price'
                        />
                    </div>
                    <div className="navbar-item">
                            <OptionsFilter options={ options }
                                            selected={ filters.rooms }
                                            icon="fa-bed" 
                                            onChange = {onChange}
                                            name = 'rooms'
                        />
                    </div>

                </nav>
        )
    }
}

export default Filters
