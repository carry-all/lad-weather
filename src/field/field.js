import React, {useContext} from 'react';
import Context from '../context';
import FieldLine from "./fieldLine";

function Field() {
    const ctx = useContext(Context);
    return <div>
        {
            function() {
                const arr = [];
                for (let i = 0;
                i < ctx.field.height;
                i++
            )
                {
                    arr.push(<FieldLine id={i}/>);
                }
                return arr;
            }()
        }
    </div>
}

export default Field;