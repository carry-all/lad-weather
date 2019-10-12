import React, {useState, useEffect} from 'react';
import WidgetUi from "../widgetUi/widgetUi";
import {Icon} from 'antd';

function AddableWidget(props) {
    if (props.data.isLoaded) {
        return <div className="widget">
            <input type="button" value='x' onClick={() => {
                props.onDelete(props.data.city)
            }}/>
            <WidgetUi data={props.data}/>
        </div>
    } else if (props.data.isError) {
        return <div className="widget">
            <input type="button" value='x' onClick={() => {
                props.onDelete(props.data.city)
            }}/>
            <Icon type="stop"/>
        </div>
    } else {
        return <div className="widget">
            <Icon type="loading"/>
        </div>
    }
}

export default AddableWidget;