import React from 'react';
import { decodeEntity } from 'html-entities';
import EmojiButton from './EmojiButton';
import { Emoji } from '../src/types';

interface IMemoryCardProps {
    data : Emoji[],
    handleClick: (e: React.MouseEvent<HTMLButtonElement>, index:number, emoji:Emoji ) => void;
}

export default function MemoryCard({data, handleClick }: IMemoryCardProps) {
  const cardEl = data.map((emoji, index) => (
    <li key={index} className="card-item">
      <EmojiButton 
        content={decodeEntity(emoji.htmlCode[0])} 
        handleClick={(e) => handleClick(e, index, emoji)} 
        style="btn btn--emoji" >
      </EmojiButton>
    </li>
  ));
  
  return <ul className="card-container">{cardEl}</ul>;
}