import React,{useEffect,useState} from 'react'
import AdviceContainerStyle from "../styles/AdviceContainer.module.css"
import GenerateNewAdvice from './GenerateNewAdvice'
import axios from 'axios'

const AdviceContainer = () => {
    const [data, setData] = useState({});
    const [newData, setNewData] = useState();

    
    useEffect(() => {
        const getData = async () =>{
          await axios.get("https://api.adviceslip.com/advice").then(response => {
          console.log(response.data.slip);
          setData(response.data.slip)
        })
      }     
        setNewData(getData);
        console.log(getData);
        getData();
  
      }, []); 


  return (
    <div className={AdviceContainerStyle.container}>
        <h3>{data.id}</h3>
        <p>{data.advice}</p>
        <div>
            <hr/>
            <hr/>
        </div>
        <GenerateNewAdvice generate={newData}/>
    </div>
  )
}

export default AdviceContainer