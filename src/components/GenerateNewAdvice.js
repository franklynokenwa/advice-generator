import React from 'react'
import GenerateNewAdviceStyle from "../styles/GenerateNewAdvice.module.css"

const GenerateNewAdvice = ({refetch}) => {
  return (
    <button className={GenerateNewAdviceStyle.container} onClick={refetch} >
        Get
    </button>
  )
}

export default GenerateNewAdvice