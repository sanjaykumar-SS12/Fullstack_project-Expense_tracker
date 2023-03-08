import axios from 'axios';
import '../styles/UserComponent.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function UserComponent() {
    const navigate=useNavigate();
    const[data,setName]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/gainers')
        .then((response)=>{
            setName(response.data);
            console.log(response.data)
        })
    },[])
    return ( 
        <>  
                <h1 className="text-center">Expense Tracker</h1>
                <button className='add' onClick={()=>{
                    navigate('/add')
                }}>Add a Event</button>
                <table>
                    <thead>
                        <tr className='head'>

                            <td>Event</td>
                            <td>Spended</td>
                            <td>VIEW</td>
                            <td>EDIT</td>
                            <td>DELETE</td>

                        </tr>
                    </thead>
                    <tbody> 
                        {
                            data.map(
                                e =>
                                <tr key={e.id}>
                                    <td>{e.name}</td>
                                    <td> {e.increasePercentage}</td>
                                    
                                    <td><input type='submit' id='one' onClick={()=>navigate('/view',{state:{id:e.id}})} value='VIEW'></input></td>
                                    <td><input type='submit' id='one'onClick={()=>navigate('/edit',{state:{id:e.id}})} value='EDIT'></input></td>
                                    <td><input type='submit' id='one' onClick={()=>navigate('/delete',{state:{id:e.id}})} value='DELETE'></input></td>
                                    
                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>
        </>
     );
}
export default UserComponent;