import React, {useContext} from 'react';
import Context from '../context';
import Empty from "../fieldElements/empty/empty";
import Apple from "../fieldElements/apple/apple";
import Stone from "../fieldElements/stone/stone";
import SnakeBody from "../fieldElements/snakeBody/snakeBody";
import './fieldBlock.css';

function FieldBlock(props) {
    const ctx = useContext(Context);
    const [x, y] = [props.x, props.y];

    let result = <Empty/>;

    function redrawForArray(array, ele) {
        if (array.find((o) => {
            return ((o[0] === x) && (o[1] === y));
        })) {
            result = ele;
        }
    }

    redrawForArray(ctx.field.apple, <Apple/>);
    redrawForArray(ctx.field.rocks, <Stone/>);
    redrawForArray(ctx.field.snake.body, <SnakeBody/>);

    return result;

}

export default FieldBlock;