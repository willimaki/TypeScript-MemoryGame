import React from 'react';

interface RegularButtonProps {
  children: React.ReactNode;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function RegularButton({ children, handleClick }: RegularButtonProps) {
  return (
    <button
      className="btn btn--text"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}