import React from "react"
import { useState } from 'react'
function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    async function loginUser(event){
    event.preventDefault()
    const response=await fetch('http://localhost:1337/api/login', {
    method:'POST',
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
        body:JSON.stringify({
          email,
          password,                               
        }),
    })
    const data = await response.json()
    if(data.user){
      localStorage.setItem('token',data.user)
      alert('Login Successful')
      window.location.href='/dashboard'
    }
    else{
      alert('Please check your cridentails')
    }
    console.log(data)
    }

      return (
        <form onSubmit={loginUser}>
        <div>
            
          <h1>Login</h1><br/>
          <input 
                onChange={(e)=> setEmail(e.target.value)}
                type={'email'} placeholder="Email" value={email}/><br/>
          <input
                onChange={(e)=> setPassword(e.target.value)}
                type={'password'} placeholder="Password" value={password}/><br/>
          <input type={"submit"} value="Login" />
     </div>
     </form>
      )
}

export default Login
