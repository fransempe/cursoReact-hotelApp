import React from 'react'
import moment from 'moment'

function Nav ( { filters } ) {

const optionDate = {
                    weekDay: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }
            
        return (
            <div>
                <section className = "hero is-primary">
                    <div className = "hero-body">
                        <div className="container">
                            <h1 className="title">Hoteles</h1>
                            <h2 className="subtitle">
                                desde el <strong>{ moment(filters.dateFrom).format('LL') } </strong> 
                                hasta el <strong>{ moment(filters.dateTo).format('LL') } </strong>
                                en <strong>{ filters.country } </strong>
                                a $<strong>{ filters.price }.- </strong>
                                con <strong>{ filters.rooms } habitaciones.</strong>
                            </h2>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

export default Nav;
