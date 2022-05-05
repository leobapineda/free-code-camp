import React from "react";
import '../stylesheet/Counter.css'

function Counter({count}) {
    return(
        <div className="counter" >
            <div>{count}</div>
        </div>
    )
}

export default Counter