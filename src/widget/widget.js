import React, {useState, useEffect} from 'react';
import axios from "axios";
import AddableWidget from "../addableWidget/addableWidget";

function Widget(props) {
    const [data, setData] = useState({
        city: "loading",
        temp: 0,
        isLoaded: false,
        isError: false,
    });

    useEffect(() => {
        let request = axios.get("http://openweathermap.org/data/2.5/weather?q=" + props.city + "&appid=b6907d289e10d714a6e88b30761fae22");
        request.then((response) => {
            const newTemp = {...data};
            newTemp.city = props.city;
            newTemp.temp = response.data.main.temp;
            newTemp.isLoaded = true;
            setData(newTemp);
        }).catch(
            () => {
                const newTemp = {...data};
                newTemp.isError = true;
                setData(newTemp);
            }
        );

    }, []);

    return <AddableWidget data={data} onDelete={props.onDelete}/>
}

export default Widget;