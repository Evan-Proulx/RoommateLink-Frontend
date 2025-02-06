import {useState} from 'react'
import './App.css'
import Register from "./Components/Register/Register.tsx"
import Login from "./components/Login.tsx"
import Navbar from "./Components/Navbar.tsx";
import Survey from "./Components/Survey.tsx";

function App() {

    return (
        <>
            <div className={"flex flex-col h-screen"}>
                <Navbar/>
                <div className={"flex-grow flex items-center justify-center bg-[var(--color-primary)]"}>
                    <Survey/>
                </div>
            </div>
        </>
    )

}

export default App
