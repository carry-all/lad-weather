import React from 'react';
import { connect } from 'react-redux';

const Header = function(props) {


    return <>
        <p>Hello {props.name} of { props.age } </p>
    </>
}

export default connect((state) => {
    return state.user;
})(Header);
