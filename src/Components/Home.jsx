import { Button } from "@chakra-ui/react";
import {Link} from "react-router-dom"


function Home(){
    return <div>
        <Link to="/dashboard" ><Button>User Side</Button></Link>
        {/* <Link to="/login" > <Button>Login</Button> </Link> */}
        <Link to='/admin'> <Button>Admin</Button> </Link>
        <Link to='/men-clothing' ><Button>Men</Button></Link>
    </div>
}

export default Home;