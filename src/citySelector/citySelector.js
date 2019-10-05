import React, { useRef } from 'react';

function CitySelector(props) {
    const name = useRef();

    return <div>
        <p>City: <input type="text" ref={name}/></p>
        <input type="button" value="+" onClick={() => {
            props.callback(name.current.value);
        }}/>
    </div>
}

export default CitySelector;