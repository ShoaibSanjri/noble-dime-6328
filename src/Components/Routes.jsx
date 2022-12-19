import {Route,Routes} from "react-router-dom"
import App from "../App";
import Login from "./Login";
import Home from "./Home";
import Admin from "./Admin";
import MensClothing from "./MenClothing";
import AddProduct from "./AddProduct";
import AdminLoginForm from "./AdminLoginForm";
import Cart from "./Cart";
function Routing(){
    return <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<App />} />
        <Route path='/admin' element={<Admin />} />
        <Route path="/men-clothing" element={<MensClothing />} />
        <Route path="/add-product" element={<AddProduct/>} />
        <Route path="/admin-login" element={<AdminLoginForm/>} />
        <Route path="/cart" element={<Cart />} />
        
    </Routes>

}

export default Routing;

//dashborad user, admin  =   