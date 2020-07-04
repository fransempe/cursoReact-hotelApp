import React from 'react'

function Nav ( props ) {

    const { filters } = props

        return (
            <div>
                <section className = "hero is-primary">
                    <div className = "hero-body">
                        <div className="container">
                            <h1 className="title">Hoteles</h1>
                            <h2 className="subtitle">
                                desde el <strong>{ filters.dateFrom }</strong> hasta el <strong>{ filters.dateTo }</strong>
                            </h2>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

export default Nav;
