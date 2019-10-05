import React, {useState, useEffect} from 'react';
import WidgetUi from "../widgetUi/widgetUi";
import axios from "axios";

function Widget(props) {
    const [data, setData] = useState({
        city: "loading",
        temp: 0,
    });

    useEffect(() => {
        let request = axios.get("http://openweathermap.org/data/2.5/weather?q=" + props.city + "&appid=b6907d289e10d714a6e88b30761fae22");
        request.then((response) => {
            let newTemp = {...data};
            newTemp.city = props.city;
            newTemp.temp = response.data.main.temp;
            setData(newTemp);
        });

    }, []);

    return <div>
        <WidgetUi data={data} />
    </div>
}

export default Widget;