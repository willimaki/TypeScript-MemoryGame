import RegularButton from "./RegularButton";
import { useRef, useEffect } from 'react';

interface IGameover{
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}


export default function GameOver({handleClick} :IGameover):JSX.Element {
    
    // add focus on the div element when game is over
    const divRef = useRef<HTMLDivElement>(null)
    useEffect(() =>{
        divRef.current?.focus()
    }, [])

    return(
        <div className="wrapper wrapper--accent" ref={divRef} tabIndex={-1} >
            <p className="p--large">You've matched all the memory cards!</p>
            <RegularButton handleClick={handleClick}>
                Play Again?
            </RegularButton>
        </div>
        
    )
}
