import {useState} from 'react'
import './App.css'
import Register from "./Components/Register/Register.tsx"
import Login from "./components/Login.tsx"
import ProfileImg from "./Components/Profile/Aside/ProfileImg.tsx";
import Aside from "./Components/Profile/Aside/Aside.tsx";
import ProfilePage from "./Components/Profile/ProfilePage.tsx";

function App() {

  return (
    <>
      <div className={"h-screen flex  items-center justify-center bg-[var(--color-primary)]"}>
                <ProfilePage/>
      </div>
    </>
  )

}

export default App
