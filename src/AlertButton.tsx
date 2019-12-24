import React from 'react';

const onClickHandler = () => {
    console.log('hello');
    alert('fanks');
} 

const AlertButton: React.FC = () => <button className="" onClick={onClickHandler}>BOO</button>

export default AlertButton;
