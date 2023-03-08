import { Navigate, useLocation, useNavigate } from "react-router-dom"
import {useEffect} from "react";
import '../styles/DeleteComponent.css';
import UserComponent from "./UserComponent";
import axios from "axios";

export default function DeleteComponent(){
    const navigate=useNavigate();
    const location=useLocation()
    const key=location.state.id;
    useEffect(()=>{
        axios.delete(`http://localhost:8080/gainers/${key}`)
        navigate('/')
    },[])
    console.log(key)
    
    return(
    <>
    {<UserComponent/>}
    </>);
}