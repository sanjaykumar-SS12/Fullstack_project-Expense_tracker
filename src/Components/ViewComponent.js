import axios from "axios";
import '../styles/ViewComponent.css';
import {useEffect,useState} from "react";
import { useLocation } from "react-router-dom"
export default function ViewComponent(){
    const location=useLocation();
    const [value,setValue]=useState();
    useEffect(()=>{
        axios.get(`http://localhost:8080/gainers/${location.state.id}`)
        .then((res)=>{
            setValue(res.data);
            console.log(value)}
            )
    },[])
    return (
        <>{
            value&&<>
            <h1>Event id : {value.id}</h1>
            <h1>Event name : {value.name}</h1>
            <h1>Amount After : {value.beforePrice}</h1>
            <h1>Amount Before : {value.afterPrice}</h1>
            <h1>Amount Spend : {value.increasePercentage}</h1>
            </>
        }
        </>
    )
}