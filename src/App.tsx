import {useState} from 'react'
import './App.css'
import Login from "./components/Login.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {

    return (
        <>
            <div className={"h-screen"}>
                <Navbar/>
                <div className={"h-full flex items-center justify-center bg-[var(--color-primary)]"}>
                    <Login/>
                </div>
            </div>
        </>
    )
}

export default App
