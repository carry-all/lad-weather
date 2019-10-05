import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import CitySelector from "./citySelector/citySelector";
import Widget from "./widget/widget";

function App() {
    const [cities, setCities] = useState(["Moscow"]);

    function addCity(city) {
      const newCities = [...cities];
      newCities.push(city);
      setCities(newCities);
    }

    return (
        <div className="App">
            <CitySelector callback={addCity}/>
          {
            cities.map((city) => {return <Widget city={city}/>})
          }


            {/*<header className="App-header">*/}
            {/*    <img src={logo} className="App-logo" alt="logo"/>*/}
            {/*    <p>*/}
            {/*        Edit <code>src/App.js</code> and save to reload.*/}
            {/*    </p>*/}
            {/*    <a*/}
            {/*        className="App-link"*/}
            {/*        href="https://reactjs.org"*/}
            {/*        target="_blank"*/}
            {/*        rel="noopener noreferrer"*/}
            {/*    >*/}
            {/*        Learn React*/}
            {/*    </a>*/}
            {/*</header>*/}
        </div>
    );
}

export default App;
