import React, { Component } from 'react'
import moment from 'moment'

class DateFilter extends Component {
    constructor(props){
        super(props)
    }


    render(){
        const { icon, date, onChange, name } = this.props
        return(
            <div className="field">
                <div className="control has-icons-left">
                    ​<input className="input" 
                        type="date"
                        value={moment( date ).format('YYYY-MM-DD')} 
                        onChange={ onChange }
                        name={ name }
                    /> 
                    <span className="icon is-small is-left">
                        <i className={ icon }></i>
                    </span>
            </div>
            </div>
        )
    }
}

export default DateFilter;