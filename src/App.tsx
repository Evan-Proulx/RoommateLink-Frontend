import {useState} from 'react'
import './App.css'
import Register from "./Components/Register/Register.tsx"
import Login from "./components/Login.tsx"
import Navbar from "./Components/Navbar.tsx";
import Survey from "./Components/Survey/Survey.tsx";
import ButtonNav from "./Components/Survey/Button-Nav.tsx";
import TimePicker from "./Components/Survey/TimePicker.tsx";

function App() {

    return (
        <>
            {/*<div className={"flex flex-col"}>*/}
            {/*    <Survey/>*/}
            {/*</div>*/}
            <div className={"h-screen grid content-center bg-gray-200"}>
                <TimePicker/></div>
        </>
    )

}

export default App
