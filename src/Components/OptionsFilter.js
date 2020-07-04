import React, { Component } from 'react'

class OptionsFilter extends Component {
    constructor(props){
        super()
    }

    execute = () => {
        alert("asd")
    }

    render() {
        const options = this.props.options
        return (
            <div>
                <div className="field">
                    <div className="control has-icons-left">
                        <div className="select" style={{width: '100%'}}>
                            <select style={{width: '100%'}} defaultValue={this.props.selected} >
                            {   
                               options.map((option) =>
                                <option key={option.name} 
                                        value={option.value} 
                                        onClick={this.execute}>
                                        {option.name}
                                </option>
                               )
                            }
                            </select>
                        </div>
                        <div className="icon is-small is-left">
                            <i className="fas">
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OptionsFilter;