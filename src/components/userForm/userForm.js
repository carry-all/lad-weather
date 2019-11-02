import React from 'react';
import {connect} from 'react-redux';
import {setName} from "../../store/actionCreators";

function UserForm(props) {
    return <>
        <p>Name <input type="text" value={props.name} onChange={
            (event) => {
                props.setName(event.target.value)
            }
        }/></p>
        <p>Age <input type="text" value={props.age} onChange={() => {
        }}/></p>
    </>;
}

export default connect(state => state.user, {setName})(UserForm);
