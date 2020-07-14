import React from 'react'

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
                                desde el <strong>{ filters.dateFrom.toLocaleDateString('es-AR', optionDate) } </strong> 
                                 hasta el <strong>{ filters.dateFrom.toLocaleDateString('es-AR', optionDate) }</strong>
                            </h2>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

export default Nav;
