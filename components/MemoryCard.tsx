import React from 'react';
import EmojiButton from './EmojiButton';
import { IEmoji, IEmojiCard } from '../src/types';

interface IMemoryCardProps {
    data : IEmoji[],
    selectedCards: IEmojiCard[]
    matchedCards: IEmojiCard[]

    handleClick: (e: React.MouseEvent<HTMLButtonElement>, index:number, emoji:IEmoji ) => void;
}

export default function MemoryCard({data, handleClick, selectedCards, matchedCards }: IMemoryCardProps) {
  const cardEl: JSX.Element[] = data.map((emoji, index) => {
    const selectedCardEntry: IEmojiCard | undefined  = selectedCards.find(emoji => emoji.index === index)
    const matchedCardEntry: IEmojiCard | undefined = matchedCards.find(emoji => emoji.index === index)
    const cardStyle: string = matchedCardEntry ? "card-item--matched" : selectedCardEntry ? "card-item--selected"  : ""

    return (
      <li key={index} className={`card-item ${cardStyle}`}>
      <EmojiButton 
        emoji={emoji} 
        index={index}
        handleClick={(e) => handleClick(e, index, emoji)}
        selectedCardEntry={selectedCardEntry}
        matchedCardEntry={matchedCardEntry}
        >
      </EmojiButton>
    </li>
    )
  });
  
  return <ul className="card-container">{cardEl}</ul>;
}