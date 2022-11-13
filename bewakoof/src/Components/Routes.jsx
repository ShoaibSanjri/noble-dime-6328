import {Route,Routes} from "react-router-dom"
import App from "../App";
import Login from "./Login";
import Home from "./Home";
import Admin from "./Admin";
function Routing(){
    return <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<App />} />
        <Route path='/admin' element={<Admin />} />
    </Routes>

}

export default Routing;

//dashborad user, admin  =   