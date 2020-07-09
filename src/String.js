import React from 'react';

function String(props) {
    return (
        <div className="string" id={props.frequency} onMouseEnter={() => props.onHover(props.frequency)}></div>
    )
}

export default String;