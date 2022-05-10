import React from "react";
import '../style/Box.css'

export default function Box({on, id}) {

    const personlStyle = {
        'backgroundColor' : on ? '#222222' : '#cccccc'
    }

    return(
        <div style={personlStyle} className='box'  >
            {on} {id}
        </div>
    )
}