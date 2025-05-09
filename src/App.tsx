import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import Form from '../components/Form';
import GameOver from '../components/GameOver'
import MemoryCard from '../components/MemoryCard';
import AssistiveTechInfo from '../components/AssistiveTechInfo'
import { Emoji, EmojiCard } from './types';
import { useWindowSize } from 'react-use';

export default function App() {

  const [isGameOn, setIsGameOn] = useState<boolean>(false)
  const [emojisData, setEmojisData] = useState<Emoji[]>([])
  const [selectedCards, setSelectedCards] = useState<EmojiCard[]>([])
  const [matchedCards, setMatchedCards] = useState<EmojiCard[]>([])
  const [isGameOver, setIsGameOver] = useState<boolean>(false)
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

  async function startGame(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    setIsGameOn(true);

    try{
      const response  : Response = await fetch("https://emojihub.yurace.pro/api/all/group/objects")
      
      if(!response.ok){
        throw new Error(`Response status error : ${response.status}`)
      }

      const data: Emoji[] = await response.json()
      const dataSample: Emoji[] = await getEmojisArray(getDataSlice(data))

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

  function getRandomIndices(data: Emoji[]): number[] { //function to get x unique random numbers within data length
    const randomIndicesArray: Set<number> = new Set<number>
    while(randomIndicesArray.size < 2){
      randomIndicesArray.add(Math.floor(Math.random() * data.length))
    }
    return Array.from(randomIndicesArray)
  }

  function getEmojisArray(data: Emoji[]): Emoji[]{
    const pairedEmojisArray : Emoji[] = [...data, ...data]
    //Fisher Yates shuffle algorithm :
    for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1))
      const temp: Emoji = pairedEmojisArray[i]
      pairedEmojisArray[i] = pairedEmojisArray[j]
      pairedEmojisArray[j] = temp
  }
    return pairedEmojisArray
  }

  function turnCard(e: React.MouseEvent<HTMLButtonElement>, index:number, emoji:Emoji): void {
    const selectedCard : EmojiCard = {index: index, name: emoji.name}
    setSelectedCards((prevSelectedCards) => {
      if (prevSelectedCards.find((card) => card.index === selectedCard.index) === undefined && prevSelectedCards.length < 2) {
        return [...prevSelectedCards, selectedCard];
      }
      return [selectedCard];
    });
  }

  function resetGame(){
    setIsGameOn(false)
    setSelectedCards([])
    setMatchedCards([])
    setIsGameOver(false)
  }
  
  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <AssistiveTechInfo emojisData={emojisData} matchedCards={matchedCards}/>}
      {isGameOver && <Confetti width={width} height={height} /> && <GameOver handleClick={resetGame}/>}
      {isGameOn &&  <MemoryCard  handleClick={turnCard} data={emojisData} selectedCards={selectedCards} matchedCards={matchedCards}/>}
      
    </main>
  );
}