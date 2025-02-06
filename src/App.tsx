import {useState} from 'react'
import './App.css'
import Register from "./Components/Register/Register.tsx"
import Login from "./components/Login.tsx"

function App() {

  return (
    <>
      <div className={"h-screen flex  items-center justify-center bg-[var(--color-primary)]"}>
                <Register/>
      </div>
    </>
  )

}

export default App
