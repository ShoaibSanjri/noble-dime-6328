import { Button } from "@chakra-ui/react";
import {Link} from "react-router-dom"


function Home(){
    return <div>
        <Link to="/dashboard" ><Button>dashboard</Button></Link>
        <Link to="/login" > <Button>Login</Button> </Link>
        <Link to='/admin'> <Button>Admin</Button> </Link>
    </div>
}

export default Home;