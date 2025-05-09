import { IEmoji, IEmojiCard } from "../src/types";

interface IAssistiveTechInfoProps{
    emojisData: IEmoji[]
    matchedCards: IEmojiCard[]
}

export default function AssistiveTechInfo({emojisData, matchedCards}:IAssistiveTechInfoProps):JSX.Element{
    return(
        <h2 className="sr-only" aria-live="polite" aria-atomic="true"> 
            Game Status :
            <p>{`Number of matched pairs : ${matchedCards.length / 2}`}</p>
            <p>Number of cards left to match : {emojisData.length - matchedCards.length} </p>
        </h2>
    )
}