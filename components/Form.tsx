import React from 'react';
import RegularButton from './RegularButton';

interface FormProps {
  handleSubmit: (e: React.FormEvent) => void;
}

export default function Form({ handleSubmit }: FormProps) {
  return (
    <form className="wrapper">
      <RegularButton handleClick={handleSubmit}>
        Start Game
      </RegularButton>
    </form>
  );
}