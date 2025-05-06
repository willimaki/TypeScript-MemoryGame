import React from 'react';
import { decodeEntity } from 'html-entities';
import { Emoji } from '../src/types';

interface MemoryCardProps {
    data : Emoji[],
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function MemoryCard({data, handleClick }: MemoryCardProps) {
  const emojiEl = data.map((emoji, index) => (
    <li key={index} className="card-item">
      <button
        className="btn btn--emoji"
        onClick={handleClick}
      >
        {decodeEntity(emoji.htmlCode[0])}
      </button>
    </li>
  ));
  
  return <ul className="card-container">{emojiEl}</ul>;
}