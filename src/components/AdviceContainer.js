import React,{useEffect,useState} from 'react'
import AdviceContainerStyle from "../styles/AdviceContainer.module.css"
import GenerateNewAdvice from './GenerateNewAdvice'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import divider from "../images/pattern-divider-desktop.svg"

const AdviceContainer = () => {
    // const [data, setData] = useState({});
    const [newData, setNewData] = useState();

    
    // useEffect(() => {
    //     const getData = async () =>{
    //       await axios.get("https://api.adviceslip.com/advice").then(response => {
    //       console.log(response.data.slip);
    //       setData(response.data.slip)
    //     })
    //   }     
    //     setNewData(getData);
    //     console.log(getData);
    //     getData();
  
    //   }, []); 

      const {isLoading, error, data, refetch} = useQuery(["quotes"], ()=>{
        return axios.get("https://api.adviceslip.com/advice")
        .then(response => 
          response.data
        )}
      )

    if (isLoading) return <h1>"Loading..."</h1> ;

    if (error) return <h1>"An error has occurred: "</h1> + error.message;


  return (
    <div className={AdviceContainerStyle.container}>
        <h3> ADVICE #{data.slip.id}</h3>
        <p>{data.slip.advice}</p>
        <img src={divider} className={AdviceContainerStyle.divider}/>
        <GenerateNewAdvice refetch={refetch}/>
    </div>
  )
}

export default AdviceContainer