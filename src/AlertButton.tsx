import React from 'react';

interface Message {
    display: String,
    console: String 
}

const xmasMessage = { display: "Merry Xmax Cobba!", console: "SOME_OTHER_THING"};
const easterMessage = { display: "Happy Easter you dangerous freak!", console: "EASTER_INIT"};
const newYearsEveMessage = { display: "HAPPY FRICKEN NEW YEAR!", console: "ARBITARY_ENJOYMENT_DATE"};

const messagesArray = [
    xmasMessage,
    easterMessage,
    newYearsEveMessage
];

const getAlert = () : Message => {
    return messagesArray[Math.floor(Math.random() * Math.floor(messagesArray.length))];
}

const onClickHandler = () => {
    const message = getAlert();
    console.log(message.console);
    alert(message.display);
}

const AlertButton: React.FC = () => <button className="btn btn-secondary" onClick={() => onClickHandler()}>BOO</button>

export default AlertButton;
