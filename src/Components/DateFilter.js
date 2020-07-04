import React from 'react'

function DateFilter(props) {

    return(
        <div className="field">
            <div className="control has-icons-left">
                ​<input className="input" type="date" /> {/* value={props.date} */}
                <span className="icon is-small is-left">
                    <i className={ props.icon }></i>
                </span>
           </div>
        </div>
    )
}

export default DateFilter;