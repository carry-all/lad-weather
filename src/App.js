import React, {useState} from 'react';
import './App.css';
import Context from './context';
import Field from "./field/field";
import Control from "./control/control";

function App() {
    function jsonCopy(src) {
        return JSON.parse(JSON.stringify(src));
    }

    const [field, setField] = useState({
        width: 20,
        height: 20,
        snake: {
            direction: 0,
            body: [
                [2, 2],
                [2, 3],
                [3, 3]
            ]
        },
        apple: [[1, 1]],
        rocks: [[4, 4]],
    });

    const control = {
        tick: () => {
            const newField = jsonCopy(field);

            function getNewPos(lastPos, direction) {
                const newPos = [...lastPos];

                switch (direction) {
                    case 0:
                        if (newPos[1] === 0) {
                            newPos[1] = field.height - 1;
                        } else {
                            newPos[1] = newPos[1] - 1;
                        }
                        return newPos;
                    case 1:
                        if (newPos[0] >= field.width - 1) {
                            newPos[0] = 0;
                        } else {
                            newPos[0] = newPos[0] + 1;
                        }
                        return newPos;
                    case 2:
                        if (newPos[1] >= field.height - 1) {
                            newPos[1] = 0;
                        } else {
                            newPos[1] = newPos[1] + 1;
                        }
                        return newPos;
                    case 3:
                        if (newPos[0] === 0) {
                            newPos[0] = field.width - 1;
                        } else {
                            newPos[0] = newPos[0] - 1;
                        }
                        return newPos;
                }
                console.error("Failed");
            }

            let isApple = false;

            function isValidPos(pos) {
                // check apple
                for (let i = 0; i < field.apple.length; i++) {
                    const o = field.apple[i];
                    if ((o[0] === pos[0]) && (o[1] === pos[1])) {
                        isApple = true;

                        newField.apple.splice(i, 1);
                        setField(newField);
                        break;
                    }
                }

                return true;
            }

            const newPos = getNewPos(field.snake.body[0], field.snake.direction);
            if (isValidPos(newPos)) {
                const newBody = [newPos].concat(newField.snake.body);
                if (!isApple) {
                    newBody.splice(newBody.length - 1, 1);
                }
                newField.snake.body = newBody;
            }
            setField(newField);
        }

        ,
        changeDirection: (dir) => {
            const newField = jsonCopy(field);
            newField.snake.direction = dir;
            setField(newField);
        }
    }


    return (
        <div className="App">
            <Context.Provider value={{
                field,
                control,
            }}>
                <Field/>
                <Control/>
            </Context.Provider>
        </div>
    )
        ;
}

export default App;
