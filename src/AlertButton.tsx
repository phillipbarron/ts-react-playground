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

const getMessage = () : Message => {
    return messagesArray[Math.floor(Math.random() * Math.floor(messagesArray.length))];
}

const clickHandler = (onClickHandler: (message: String) => (any) ): void => {
    const message = getMessage();
    onClickHandler(message.display)(message.display);
}

type AlertProps = {
    click: (message: String) => void
}

const AlertButton: React.FC<AlertProps> =
    ( { click } ) =>
        <button 
            className="btn btn-primary" 
            onClick={() => clickHandler(click)}
        >
            CLICK ME - DO IT! - DO IT NOW!!!!!
        </button>

export default AlertButton;
