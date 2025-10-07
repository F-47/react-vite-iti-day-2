import { useEffect, useState } from 'react'
import Login from "./login.tsx"
import Dashboard from './dashboard.tsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    const storedValue = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(storedValue ? JSON.parse(storedValue) : false);
  }, []);

  if(!isLoggedIn) return <Login setIsLoggedIn={setIsLoggedIn}/>
  return <Dashboard/>
}

export default App
