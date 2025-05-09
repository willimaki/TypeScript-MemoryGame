import React from "react";
import { decodeEntity } from 'html-entities';
import { IEmoji, IEmojiCard } from "../src/types";

interface IEmojiButtonProps{
    emoji: IEmoji
    index: number
    selectedCardEntry: IEmojiCard | undefined  //not sure about undefined
    matchedCardEntry : IEmojiCard | undefined
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}



export default function EmojiButton( {emoji, index, selectedCardEntry, matchedCardEntry, handleClick }: IEmojiButtonProps): JSX.Element {
    const btnContent = (selectedCardEntry || matchedCardEntry) ? decodeEntity(emoji.htmlCode[0]) : "?"
    const btnStyle: string =  matchedCardEntry ? "btn--emoji__back--matched" : selectedCardEntry ? "btn--emoji__back--selected" : "btn--emoji__front"
    const btnAria = 
        matchedCardEntry ? `${decodeEntity(emoji.name)}, Matched.` :
        selectedCardEntry ? `${decodeEntity(emoji.name)}, Not Matched yet.` :
        "Card upside down."
    return (
        <button 
            className={`btn btn--emoji ${btnStyle}`}
            onClick={selectedCardEntry ? undefined : handleClick}
            disabled = {!!matchedCardEntry}
            aria-label={`Card number ${index + 1}: ${btnAria}`}
        >
            {btnContent}
        </button>
    )
}