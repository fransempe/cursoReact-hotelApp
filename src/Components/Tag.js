import React from 'react'

export default function Tag({children, textValue}) {



    return (
        <div className="control">
            <div className="{ `tags${  textValue ? ' has-addons' : ''}` }">
                <span className="tag is-medium is-info">
                    {children}
                </span>
            </div>
        </div>

    )
}
