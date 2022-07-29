import React from 'react'
import GenerateNewAdviceStyle from "../styles/GenerateNewAdvice.module.css"

const GenerateNewAdvice = ({generate}) => {
  console.log(generate);
  return (
    <button className={GenerateNewAdviceStyle.container} onClick={generate}>
        Get
    </button>
  )
}

export default GenerateNewAdvice