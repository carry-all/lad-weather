import React from 'react';
import './panel.css';

function Panel(props) {
    return <div className="panel">
        <p>Panel</p>
        {/*{React.Children}*/}

        {
            React.Children.map((el, i) => { //todo: doesn't work
                if (true) {
                    return el;
                    //return React.cloneElement(el, {name: props.name})
                }
            })
        }
    </div>
}

export default Panel;