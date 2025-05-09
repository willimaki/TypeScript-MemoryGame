import React from "react"
import { useRef, useEffect } from "react";
import RegularButton from "./RegularButton"

interface IErrorcard{
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void; 
}

export default function ErrorCard({handleClick}:IErrorcard){
    const divRef = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        divRef.current?.focus()
    }, [])

    return(
        <div className="wrapper wrapper--accent" ref={divRef} tabIndex={-1} aria-live="polite">
            <p className="p--large">
                Sorry there was an error
            </p>
            <p className="p--regular">
                Please come back later or click the button below to try restarting the game.
            </p>
            <RegularButton handleClick={handleClick}>
                Restart game
            </RegularButton>
        </div>
    )
}