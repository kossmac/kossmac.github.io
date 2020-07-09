import React from 'react';

function String(props) {
    return (
        <div>
            <div>{props.name}</div>
            <div className="string" id={props.frequency} onMouseEnter={() => props.onHover(props.frequency)}></div>
        </div>
    )
}

export default String;