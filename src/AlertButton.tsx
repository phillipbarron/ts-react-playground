import React from 'react';

interface Message {
    display: String,
    console: String 
}

const onClickHandler = (message: Message) => {
    console.log(message.console);
    alert(message.display);
} 
const defaultMessage = { display: "Merry Xmax Cobba!", console: "SOME_OTHER_THING"};
const AlertButton: React.FC = () => <button className="btn btn-secondary" onClick={() => onClickHandler(defaultMessage)}>BOO</button>

export default AlertButton;
