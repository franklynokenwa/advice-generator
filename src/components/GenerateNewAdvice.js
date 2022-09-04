import React from 'react'
import GenerateNewAdviceStyle from "../styles/GenerateNewAdvice.module.css"
import diceImage from "../images/icon-dice.svg"

const GenerateNewAdvice = ({refetch}) => {
  return (
    <button className={GenerateNewAdviceStyle.container} onClick={refetch} >
        <img src={diceImage} className={GenerateNewAdviceStyle.dice} />
    </button>
  )
}

export default GenerateNewAdvice