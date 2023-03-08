import axios from 'axios'
import '../styles/AddComponent.css';
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export default function AddComponent(){
    const navigate=useNavigate();
    const [name,setName]=useState();
    const [beforePrice,setBeforePrice]=useState();
    const [afterPrice,setAfterPrice]=useState();
    const [increasePercentage,setIncreasePercentage]=useState();
    const [topGain,setTopGain]=useState();

    const validateUser=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:8080/gainers`,{
            name,beforePrice,afterPrice,increasePercentage,topGain
        })
        .then(r=>{
            console.log("Amount added")
            navigate('/')
        })
    }

    return (
        <>
            <table>
                <tr>
                    <td>Event Name:</td>
                    <td>
                        <input type="text" value={name} 
                        onChange={(e)=>setName(e.target.value)}
                        placeholder="Enter Event name"/>
                    </td>
                </tr>
                <tr>
                    <td>Amount Before:</td>
                    <td>
                        <input type="Number" value={beforePrice}
                        onChange={(e)=>setBeforePrice(e.target.value)}
                        placeholder="Enter Amount"/>
                    </td>
                </tr>
                <tr>
                    <td>Amount After:</td>
                    <td>
                        <input type="Number" value={afterPrice}
                        onChange={(e)=>setAfterPrice(e.target.value)}
                        placeholder="Enter Amount "/>
                    </td>
                </tr>
                <tr>
                    <td>Amount Spend:</td>
                    <td>
                        <input type="Number" value={increasePercentage}
                        onMouseEnter={(e)=>setIncreasePercentage(beforePrice-afterPrice)}
                        placeholder="Enter Amount"/>
                     </td>
                </tr>
     
                <tr>
                    <button className="submit" onClick={validateUser}>Submit</button>
                </tr>
            </table>
        </>
    )
}
