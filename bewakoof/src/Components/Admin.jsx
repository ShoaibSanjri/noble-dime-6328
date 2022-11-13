import { Button, Heading, Input } from "@chakra-ui/react";
import Login from "./Login";

function Admin(){
    return <div>
        <Heading mt={10} mb={10} >Login Here</Heading>
        <form style={{width:"300px",margin:"auto"}} action="">
            <Input mb={5} placeholder="Enter Email" />
            <Input mb={5} placeholder = "Enter Password" />
            <Button>Login</Button>

        </form>
    </div>
}

export default Admin;