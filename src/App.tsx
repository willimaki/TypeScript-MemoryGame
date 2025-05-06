import React, { useState } from 'react';
import Form from '../components/Form';
import MemoryCard from '../components/MemoryCard';
import { Emoji } from './types';

export default function App() {


  const [isGameOn, setIsGameOn] = useState<boolean>(false)
  const [emojisData, setEmojisData] = useState<Emoji[]>([])
  
  async function startGame(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    setIsGameOn(true);

    try{
      const response  : Response = await fetch("https://emojihub.yurace.pro/api/all/category/travel-and-places")
      
      if(!response.ok){
        throw new Error(`Response status error : ${response.status}`)
      }

      const data: Emoji[] = await response.json()
      const dataSample: Emoji[] = getEmojisArray(getDataSlice(data))

      
      setEmojisData(dataSample)     
    }catch(e){
      console.error(e)
    }

  }

  function getDataSlice(data: Emoji[]): Emoji[]{
    const randomIndices : number[] = getRandomIndices(data)
    const dataSlice: Emoji[] = [] 
    randomIndices.forEach(element => {
      dataSlice.push(data[element])
    });
    return dataSlice
  }
  

  function getRandomIndices(data: Emoji[]): number[] { //function to get 5 unique random numbers within data length
    const randomIndicesArray: Set<number> = new Set<number>
    while(randomIndicesArray.size < 5){
      randomIndicesArray.add(Math.floor(Math.random() * data.length))
    }
    return Array.from(randomIndicesArray)
  }

  function getEmojisArray(data: Emoji[]): Emoji[]{
    const pairedEmojisArray : Emoji[] = [...data, ...data]
    for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = pairedEmojisArray[i]
      pairedEmojisArray[i] = pairedEmojisArray[j]
      pairedEmojisArray[j] = temp
  }


    return pairedEmojisArray
  }
  
  function turnCard(e: React.MouseEvent<HTMLButtonElement>): void {
    console.log("Memory card clicked");
  }
  
  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <MemoryCard data ={emojisData} handleClick={turnCard} />}
    </main>
  );
}