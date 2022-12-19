import { Button, Heading, Input,Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AdminLoginForm from "./AdminLoginForm";
import Login from "./Login";
import OfferNavbar from "./OfferNavbar";

function Admin(){
    const handleDelete = () =>{
        
    }
    return <Box  >
        <OfferNavbar  />
        <Box mt={5} >
        <Link to="/add-product"><Button>Add Product</Button></Link>
        <Link to='/admin-login' ><Button>Login</Button></Link>
        <Button onClick={handleDelete} >Delete Product</Button>
        <Button>See User</Button>
        </Box>
    </Box>
}

export default Admin;