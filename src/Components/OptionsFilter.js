import React, { Component } from 'react'

class OptionsFilter extends Component {
    constructor(){
        super()
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    handleOptionChange = (e) =>{
        this.props.onOptionChange(e)
    }

    render() {
        const {options, icon, onChange, name} = this.props
        return (
            <div>
                <div className="field">
                    <div className="control has-icons-left">
                        <div className="select" style={{width: '100%'}}>
                            <select style={{width: '100%'}} 
                                defaultValue={this.props.selected} 
                                onChange={ this.handleOptionChange }
                                name={ name }
                                onChange = { onChange }
                                >
                            {   
                               options.map((option) =>
                                <option key={option.name} 
                                        value={option.value}>
                                        {option.name}
                                </option>
                               )
                            }
                            </select>
                        </div>
                        <div className="icon is-small is-left">
                            <i className={'fas '+ icon}>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OptionsFilter;