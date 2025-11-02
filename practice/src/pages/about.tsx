import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

function AboutPage() {
  const [count,setCount]= React.useState<number>(0)

  useEffect(()=> {
    console.log(count, "count changed")
  }, [count])
  function runCounter(){
    setCount(prev => {
  console.log('Previous count:', prev)
  return prev + 1
})
    console.log("Count Value:", count)
  }

    const navigate= useNavigate()
    function backHome(){
        navigate('/')
    }
  return (
   <div>
     <div>AboutPage</div>
    <button onClick={backHome}>Back Home</button>

    <div>
      <button onClick={runCounter} className={"bg-gray-200 rounded-md p-1"}> Count {count}</button>
   </div>
    </div>
  )
}

export default AboutPage