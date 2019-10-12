import React, { useContext, useEffect } from 'react';
import Operation from "../operation/operation";
import Context from '../context';

function CalcView(props) {
    const ctx = useContext(Context);

    useEffect(() => {
        ctx.setA(2);
    }, []);

    return <>
            <p>CalcView {ctx.a} <Operation/> {ctx.b}</p>
    </>
}

export default CalcView;