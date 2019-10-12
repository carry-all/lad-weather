import React, {useState} from 'react';
import './App.css';
import {List} from 'antd';
import 'antd/dist/antd.css';
import CitySelector from "./citySelector/citySelector";
import Widget from "./widget/widget";
import Hello from "./hello/hello";
import Panel from "./panel/panel";

function App() {
    const [cities, setCities] = useState(["Moscow"]);

    function addCity(city) {
        if (!city || cities.includes(city)) {
            return;
        }
        const newCities = [...cities];
        newCities.push(city);
        setCities(newCities);
    }

    function onDelete(city) {
        const newCities = [...cities];
        let index = newCities.indexOf(city);
        if (index >= 0) {
            newCities.splice(index, 1)
        }
        setCities(newCities);
    }

    return (
        <div className="App">
            <CitySelector callback={addCity}/>
            <List bordered>
                {
                    cities.map((city) => {
                        return <List.Item key={city}>
                            <Widget city={city} onDelete={onDelete}/>
                        </List.Item>
                    })
                }
            </List>
            {/*name="Default"*/}
            <Panel >
                <Hello name="Igor"/>
                <Hello name="s"/>
            </Panel>
            <Panel>
                <Hello name="N"/>
                <Hello name="A"/>
            </Panel>
            <Panel>

            </Panel>
        </div>
    );
}

export default App;
