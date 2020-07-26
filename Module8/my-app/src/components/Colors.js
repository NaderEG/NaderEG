import React from 'react'

const Colors = ({colors}) => {
    const colorList = (
        colors.map(color => {
            return(
                <div className="collection-item" key={color.id}>
                    <span>{color.content}</span>
                </div>
            )
        }))
        return (
            
            <div className="colors collections">
                <h4>Colors</h4>
                {colorList}
            </div>
        )
    }
    
export default Colors
