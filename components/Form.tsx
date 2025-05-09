import React from 'react';
import RegularButton from './RegularButton';
import { useRef, useEffect } from 'react';
import { IFormDataSelection } from '../src/types.js';
import {data} from '../data/data.ts'

interface FormProps {
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  formData: IFormDataSelection
  isFirstRender: boolean
}

export default function Form({ handleSubmit, handleChange, formData, isFirstRender }: FormProps) : JSX.Element{
  const divRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    !isFirstRender && divRef.current?.focus()
}, [])
  
  return (
    <div className='form-container' ref={divRef} tabIndex={-1}>
      <p className="p--regular">
                Customize the game by selecting an emoji category and a number of memory cards.
      </p>
      <form className="wrapper">
        {/* // Can refactor */}
        <div className="form__inner-wrapper">
          <label htmlFor='cat'>Choose a category</label>
          <select name='category' id='cat' value={formData.category} onChange={handleChange}>
            {data.category.map((category, index) =>(
              <option key={index} value={category.value}>
                {category.name}
              </option>
            ))}
            </select>
        </div>

        <div className="form__inner-wrapper">
            <label htmlFor="number"> Number of Cards</label>
            <select name='number' id='number' value={formData.number} onChange={handleChange}>
              {data.number.map((number, index)=>(
                <option key={index} value={parseInt(number.value)}>
                  {number.value}
                </option>
              ))}
            </select>
        </div>

        <RegularButton handleClick={handleSubmit}>
          Start Game
        </RegularButton>
    </form>
    </div>
  );
}