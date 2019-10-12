import React, { useRef } from 'react';

function CitySelector(props) {
    const name = useRef();

    return <div>
        <p>City: <input type="text" ref={name}/>
        <input type="button" value="+" onClick={() => {
            props.callback(name.current.value);
        }}/>
        </p>
    </div>
}

export default CitySelector;