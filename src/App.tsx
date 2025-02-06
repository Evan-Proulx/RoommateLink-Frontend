import { useState } from 'react'
import './App.css'
import Login from "./components/Login.tsx";

function App() {

  return (
    <>
      <div className={"h-screen flex  items-center justify-center bg-[var(--color-primary)]"}>
                <Login/>
      </div>
    </>
  )
}

export default App
