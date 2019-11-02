import React, {useContext} from 'react';
import Context from '../context';

function Control() {
    const ctx = useContext(Context);
    return <>
        <p>Control</p>
        <input type='button' onClick={ctx.control.tick} value="tick"/>
        <input type='button' onClick={() => {ctx.control.changeDirection(3)}} value="left"/>
        <input type='button' onClick={() => {ctx.control.changeDirection(1)}} value="right"/>
        <input type='button' onClick={() => {ctx.control.changeDirection(0)}} value="up"/>
        <input type='button' onClick={() => {ctx.control.changeDirection(2)}} value="down"/>
    </>
}

export default Control;