import React from 'react'
import { useNavigate } from 'react-router'

function AboutPage() {
    const navigate= useNavigate()
    function backHome(){
        navigate('/')
    }
  return (
   <div>
     <div>AboutPage</div>
    <button onClick={backHome}>Back Home</button>
   </div>
  )
}

export default AboutPage