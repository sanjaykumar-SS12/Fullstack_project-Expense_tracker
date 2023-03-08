import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import '../styles/EditComponent.css';
import axios from "axios";
function EditComponent() {
    const navigate =useNavigate();

    const [id,setId]=useState();
    const [stock,setStock]=useState([]);
    const[name,setName]=useState();
    const[beforePrice,setBeforePrice]=useState();
    const[afterPrice,setAfterPrice]=useState();
    const[increasePercentage,setIncreasePercentage]=useState();
    const[topGain,setTopGain]=useState();

    useEffect(() => {
        axios.get(`http://localhost:8080/gainers/${location.state.id}`)
        .then((res)=>{
            console.log(res.data)
            setId(res.data.id);
            setStock(res.data);
            setName(res.data.name)
            setBeforePrice(res.data.beforePrice);
            setAfterPrice(res.data.afterPrice);
            setIncreasePercentage(res.data.increasePercentage);
            setTopGain(res.data.topGain);
        })
    }, []);

    async function validateUser(e){
        e.preventDefault();
       await axios.post("http://localhost:8080/gainers",{
        id:location.state.id,
        name:name,
        beforePrice:beforePrice,
        afterPrice:afterPrice,
        increasePercentage:increasePercentage,
        topGain:topGain
        }
        )
        alert("success");
        setName();
        setBeforePrice();
        setAfterPrice();
        setIncreasePercentage();
        setTopGain();
        navigate("/")
    
    }
    const location=useLocation();
    return ( 
        <>
            {stock&&
                <>
                <form>
                    <h3>Edit {name}</h3>
                        <div className="mb-3">
                        <label>Event Name:</label>
                        <input type="text" className="form-control" 
                        value={name}
                            onChange={(e)=>setName(e.target.value)}/>
                        </div>

                        <div className="mb-3">
                        <label>Amount Before:</label>
                        <input type="number" className="form-control" 
                        value={beforePrice}
                            onChange={(e)=>setBeforePrice(e.target.value)}/>
                        </div>

                        <div className="mb-3">
                        <label>Amount After</label>
                        <input type="number" className="form-control" 
                        value={afterPrice}
                            onChange={(e)=>setAfterPrice(e.target.value)}/>
                        </div>

                        <div className="mb-3">
                        <label>Amount Spended:</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Patient Address"
                            value={increasePercentage}
                            onMouseEnter={(e)=>setIncreasePercentage(beforePrice-afterPrice)}/>
                        </div>

       
                       
                        <button type="submit" onClick={validateUser}>Submit</button>
                    </form>
                </>
            }
        </>
     );
}

export default EditComponent;