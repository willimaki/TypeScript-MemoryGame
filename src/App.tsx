import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import Form from '../components/Form';
import GameOver from '../components/GameOver'
import MemoryCard from '../components/MemoryCard';
import ErrorCard  from '../components/ErrorCard';
import AssistiveTechInfo from '../components/AssistiveTechInfo'
import { IEmoji, IEmojiCard, IFormDataSelection } from './types';
import { useWindowSize } from 'react-use';




export default function App() {

  const initialFormData : IFormDataSelection ={
    category: "animals-and-nature",
    number: 5
  }

  const [isGameOn, setIsGameOn] = useState<boolean>(false)
  const [emojisData, setEmojisData] = useState<IEmoji[]>([])
  const [selectedCards, setSelectedCards] = useState<IEmojiCard[]>([])
  const [matchedCards, setMatchedCards] = useState<IEmojiCard[]>([])
  const [isGameOver, setIsGameOver] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [formData, setFormData] = useState<IFormDataSelection>(initialFormData)
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true)

  const {width, height} = useWindowSize()

  useEffect( () =>{
    if(selectedCards.length === 2 && selectedCards[0].name === selectedCards[1].name){
        setMatchedCards([...matchedCards, selectedCards[0], selectedCards[1]])
    }
  }, [selectedCards])
  
  useEffect(() =>{
    if(matchedCards.length && matchedCards.length === emojisData.length){
      setIsGameOver(true)
    }
  }
  ,[matchedCards])

  function handleFormChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'number' ? Number(value) : value,
    }));
  }

  async function startGame(e: React.FormEvent): Promise<void> {
    e.preventDefault();

    try{
      console.log(`https://emojihub.yurace.pro/api/all/category/${formData.category}`)
      const response  : Response = await fetch(`https://emojihub.yurace.pro/api/all/category/${formData.category}`)
      
      if(!response.ok){
        throw new Error(`Response status error : ${response.status}`)
      }

      const data: IEmoji[] = await response.json()
      const dataSample: IEmoji[] = await getEmojisArray(getDataSlice(data))

      setEmojisData(dataSample)     
      setIsGameOn(true)
    }catch(e){
      console.error(e)
      setIsError(true)
      throw new Error("Error while starting the game")
    }finally{
      setIsFirstRender(false)
    }

  }

  //Function to select random emojis from the Emoji Array, thanks to getRandomIndices function
  function getDataSlice(data: IEmoji[]): IEmoji[]{
    const randomIndices : number[] = getRandomIndices(data)
    const dataSlice: IEmoji[] = [] 
    randomIndices.forEach(element => {
      dataSlice.push(data[element])
    });
    return dataSlice
  }

  //function to get x unique random numbers within data length
  function getRandomIndices(data: IEmoji[]): number[] { 
    const randomIndicesArray: Set<number> = new Set<number>
    while(randomIndicesArray.size < formData.number / 2){
      randomIndicesArray.add(Math.floor(Math.random() * data.length))
    }
    return Array.from(randomIndicesArray)
  }

  function getEmojisArray(data: IEmoji[]): IEmoji[]{
    const pairedEmojisArray : IEmoji[] = [...data, ...data]
    //Fisher Yates shuffle algorithm :
    for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1))
      const temp: IEmoji = pairedEmojisArray[i]
      pairedEmojisArray[i] = pairedEmojisArray[j]
      pairedEmojisArray[j] = temp
  }
    return pairedEmojisArray
  }

  function turnCard(_e: React.MouseEvent<HTMLButtonElement>, index:number, emoji:IEmoji): void {
    const selectedCard : IEmojiCard = {index: index, name: emoji.name}
    setSelectedCards((prevSelectedCards) => {
      if (prevSelectedCards.find((card) => card.index === selectedCard.index) === undefined && prevSelectedCards.length < 2) {
        return [...prevSelectedCards, selectedCard];
      }
      return [selectedCard];
    });
  }

  function resetGame(): void{
    setIsGameOn(false)
    setSelectedCards([])
    setMatchedCards([])
    setIsGameOver(false)
  }
  
  function resetError(): void{
    setIsError(false)
  }

  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && !isError && <Form handleSubmit={startGame} handleChange={handleFormChange} formData={formData} isFirstRender={isFirstRender} />}
      {isGameOn && <AssistiveTechInfo emojisData={emojisData} matchedCards={matchedCards}/>}
      {isGameOver && <Confetti width={width} height={height} /> && <GameOver handleClick={resetGame}/>}
      {isGameOn &&  <MemoryCard  handleClick={turnCard} data={emojisData} selectedCards={selectedCards} matchedCards={matchedCards}/>}
      {isError && <ErrorCard handleClick={resetError} />}
      
    </main>
  );
}