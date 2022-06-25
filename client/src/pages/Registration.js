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
       <main className="form-signin w-100 m-auto">
        <div className='col-md-4'>
          <h1>Registration</h1><br/>
            <div className="form-floating">
              <input className="form-control" id="floatingInput"
                onChange={(e)=> setName(e.target.value)}
                type={'tex  t'} placeholder="Name" value={name}/>
                <label for="floatingInput">Name</label>
<br/>
            </div>
          <div className="form-floating">
              <input className="form-control" id="floatingInput"
              onChange={(e)=> setEmail(e.target.value)}
              type={'email'} placeholder="Email" value={email}/><br/>
              <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
              <input className="form-control" id="floatingInput"
              onChange={(e)=> setPassword(e.target.value)}
              type={'password'} placeholder="Password" value={password}/><br/>
                     <label for="floatingInput">Password</label>
          </div>
          <input type={'submit'} value='Submit' className='btn btn-outline-primary' size="lg"/>
       </div>
    </main>
  </form>
  )
}

export default Registration
