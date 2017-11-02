import React, { PropTypes } from 'react';

const Button = ({ OnIncrement,name }) => (
       <button onClick={OnIncrement}>{name}</button>
)

export default Button
