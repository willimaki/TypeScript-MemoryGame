import React from "react";
import { EmojiCard } from "../src/types";

interface IEmojiButtonProps{
    content : string,
    selectedCardEntry: EmojiCard | undefined  //not sure about undefined
    matchedCardEntry : EmojiCard | undefined
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function EmojiButton( {content, selectedCardEntry, matchedCardEntry, handleClick }: IEmojiButtonProps): JSX.Element {
    const btnContent = (selectedCardEntry || matchedCardEntry) ? content : "?"
    const btnStyle: string =  matchedCardEntry ? "btn--emoji__back--matched" : selectedCardEntry ? "btn--emoji__back--selected" : "btn--emoji__front"

    return (
        <button 
            className={`btn btn--emoji ${btnStyle}`}
            onClick={handleClick}
        >
            {btnContent}
        </button>
    )
      
     
}