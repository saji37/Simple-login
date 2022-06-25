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
         <main className="form-signin w-100 m-auto">
        <div className='col-md-4'>
          <h1>Login</h1><br/>
          <div className="form-floating">
              <input className="form-control" id="floatingInput"
                onChange={(e)=> setEmail(e.target.value)}
                type={'email'} placeholder="Email" value={email}/>
                <label for="floatingInput">Email</label>
            </div><br/>
            <div className="form-floating">
              <input className="form-control" id="floatingInput"
                onChange={(e)=> setPassword(e.target.value)}
                type={'password'} placeholder="Password" value={password}/>
                <label for="floatingInput">Password</label><br/>
            </div>
          <input type={"submit"} value="Login" className="btn btn-outline-primary"/>
        </div>
        </main>
     </form>
      )
}

export default Login
