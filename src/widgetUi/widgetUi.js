import React from 'react';

function WidgetUi(props) {
    return <div>
        <p>City: {props.data.city}</p>
        <p>Temperature: {props.data.temp}</p>
    </div>
}

export default WidgetUi;