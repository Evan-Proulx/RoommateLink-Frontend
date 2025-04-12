import './App.css'
import Login from "./Components/Auth/Login.tsx";
import Register from "./Components/Auth/Register/Register.tsx";
import Survey from "./Components/Survey/Survey.tsx";
import ProfilePage from "./Components/Profile/ProfilePage.tsx";
import ResetPassword from "./Components/Auth/ResetPassword.tsx";
import RecoverPassword from "./Components/Auth/RecoverPassword.tsx";
import FeedCard from "./Components/CardComponents/FeedCard.tsx";

function App() {
    return (

        <>

            <div className={""}>
                <FeedCard/>
            </div>
        </>
    )
}

export default App
