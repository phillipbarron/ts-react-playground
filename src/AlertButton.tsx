import React from 'react';

interface Message {
    display: String,
    console: String 
}

const defaultMessage = { display: "Merry Xmax Cobba!", console: "SOME_OTHER_THING"};

const getAlert = () : Message => {
    return defaultMessage;
}

const onClickHandler = () => {
    const message = getAlert();
    console.log(message.console);
    alert(message.display);
}

const AlertButton: React.FC = () => <button className="btn btn-secondary" onClick={() => onClickHandler()}>BOO</button>

export default AlertButton;
