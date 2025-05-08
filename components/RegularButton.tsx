import React from 'react';

interface IRegularButtonProps {
  children: React.ReactNode;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function RegularButton({ children, handleClick }: IRegularButtonProps) {
  return (
    <button
      className="btn btn--text"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}