import React, {useContext} from 'react';
import Context from '../context';
import FieldBlock from "./fieldBlock";

function FieldLine(props) {
    const ctx = useContext(Context);

    return <div>
        {
            function() {
                const arr = [];
                for (let i = 0;
                     i < ctx.field.width;
                     i++
                )
                {
                    arr.push(<FieldBlock x={i} y={props.id}/>);
                }
                return arr;
            }()
        }
    </div>
}

export default FieldLine;