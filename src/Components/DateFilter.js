import React, { Component } from 'react'
import moment from 'moment'

class DateFilter extends Component {
    constructor(props){
        super(props)

        this.handleDateChange = this.handleDateChange.bind(this)
    }

    handleDateChange = (e) =>{
        this.props.onDateChange(e)
    }
    
    render(){
        const { icon, date } = this.props
        return(
            <div className="field">
                <div className="control has-icons-left">
                    ​<input className="input" 
                        type="date"
                        value={moment( date ).format('YYYY-MM-DD')} 
                        onChange={ this.handleDateChange }
                        name={this.props.name}
                    /> 
                    <span className="icon is-small is-left">
                        <i className={icon}></i>
                    </span>
            </div>
            </div>
        )
    }
}

export default DateFilter;