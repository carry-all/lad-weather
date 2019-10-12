import React, {useContext} from 'react';
import Context from '../context';

function Operation(props) {

    return <>
        <Context.Consumer>
            {(context) => {
                return <p>Operation s {context.operation}</p>
            }}

        </Context.Consumer>
    </>
}

export default Operation;