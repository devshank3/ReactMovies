import { useEffect, useState } from 'react'
import './App.css'

function RectPro() {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timerID  = setInterval(() => {setCurrentDate(new Date())}, 1000);
    
        return () => clearInterval(timerID);
    
    }, []);


  return (
    <>
      <div className="rectpro-container">
        <h2>RectPro Component</h2>
        <input type="text" placeholder="Enter text here 2222" />
        <div>{currentDate.toLocaleString()}</div>
      </div>
    </>
  )
}

export default RectPro