import {useState} from 'react'
import './App.css'
import Register from "./Components/Register/Register.tsx"
import Login from "./components/Login.tsx"
import Navbar from "./Components/Navbar.tsx";
import Survey from "./Components/Survey/Survey.tsx";
import ButtonNav from "./Components/Survey/Button-Nav.tsx";
import TimePicker from "./Components/Survey/TimePicker.tsx";
import AddHobby from "./Components/Survey/AddHobby.tsx";

function App() {

    return (
        <>
            <div className={"flex flex-col"}>
                <Survey/>
            </div>


        </>
    )

}

export default App
