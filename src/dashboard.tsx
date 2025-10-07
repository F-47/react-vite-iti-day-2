import { useState } from "react"

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
    <div className="card">
        <h1>Counter</h1>
        <button onClick={
            ()=>setCount((prev)=>prev+1)
        }>{count}</button>
    </div>
  </div>
  )
}

export default Dashboard
