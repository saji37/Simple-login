import React, { useEffect } from 'react'
import { useState } from 'react'
//import {useHistory} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import jwt from 'jsonwebtoken'
const Dashboard =() => {
    const navigate=useNavigate()
    const [quote,setQuote]=useState('')
    const [tempQuote,setTempQuote]=useState('')
   // const history =useHistory()
    // async function populateQuote(){
    //     const req = await fetch('http://localhost:1337/api/quote',{
    //         headers:{
    //             'x-access-token': localStorage.getItem('token'),
    //         },
    //     })
    // //     const data=await req.json()
    // //     if(data.status === 'Ok'){
  
    // //   setQuote(data.quote)
    // //  }
    // //  else{
    // //   alert(data.error)
    // //  }
    //}
    useEffect(() => {
      console.log("working on useeffect")

        const token= localStorage.getItem('token')
        if(token){
            const user = jwt.decode(token)
            if(!user){
                localStorage.removeItem('token')
                navigate('/login')
            }
            // else{
            //     populateQuote()
            // }
        }
    }, [])
    async function updateQuote(event){    console.log("working")
      event.preventDefault()
      const req = await fetch('http://localhost:1337/api/quote',{
        method:'POST',
      headers:{
            'Content-Type':'application/json',
            'x-access-token': localStorage.getItem('token'),
        },
        body: JSON.stringify({
          quote:tempQuote,
        })
    })
    console.log(tempQuote)
    const data=await req.json()
    if(data.status === 'Ok'){
  setQuote(tempQuote)
 }
 else{
  alert(data.error)
 }
    }
    return <div>
      <h1>Your Quote: {quote|| 'No quote found'}</h1>
      <form onSubmit={updateQuote}>
        <input 
        type="text"
        placeholder='Quote'
        value={tempQuote}
        onChange={(e) => setTempQuote(e.target.value)}
        />
  <input type="submit" value="Update quote" />
      </form>
      </div>
}
export default Dashboard
