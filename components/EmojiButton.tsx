import React from "react";

interface IEmojiButtonProps{
    content : string,
    style: string
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function EmojiButton( {content, style, handleClick }: IEmojiButtonProps): JSX.Element {
    return (
        <button 
            className={style}
            onClick={handleClick}
        >
            {content}
        </button>
    )
      
     
}