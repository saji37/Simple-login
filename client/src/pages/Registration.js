import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
function Registration() {
  const navigate = useNavigate();
 const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
async function registerUser(event){
event.preventDefault()
const response=await fetch('http://localhost:1337/api/register', {
    method:'POST',
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body:JSON.stringify({
        name,
        email,
        password,
      }),
    })
const data = await response.json()
if(data.status === 'Ok'){
  navigate('/login');
}
console.log(data)
}
  return (
    <form onSubmit={registerUser}>
    <div>
      <h1>Registration</h1><br/>
      <input 
      onChange={(e)=> setName(e.target.value)}
      type={'text'} placeholder="Name" value={name}/><br/>
      <input 
            onChange={(e)=> setEmail(e.target.value)}
            type={'email'} placeholder="Email" value={email}/><br/>
      <input
            onChange={(e)=> setPassword(e.target.value)}
            type={'password'} placeholder="Password" value={password}/><br/>
      <input type="submit" value="Register"/>
 </div>
 </form>
  )
}

export default Registration
