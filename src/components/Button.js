import React from 'react';
import { Link } from 'react-router-dom';

const Button = props => {
    return <Link to={{pathname: '/', state: { to: props.to } }} className="btn">{props.name}</Link>;
};

export default Button;