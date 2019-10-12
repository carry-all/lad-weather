import React from 'react';
import './widgetUi.css';

function WidgetUi(props) {
    return <>
        <p>City: {props.data.city}</p>
        <p>Temperature: {props.data.temp}</p>
    </>
}

export default WidgetUi;