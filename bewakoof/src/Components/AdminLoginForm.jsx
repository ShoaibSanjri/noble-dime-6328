import { Box, Button, Heading, Input } from "@chakra-ui/react";
import Login from "./Login";
import OfferNavbar from "./OfferNavbar";

function AdminLoginForm(){
    return <div >
        <OfferNavbar />
        <Heading mt={10} mb={10} >Login Here</Heading>
        <Box  >
            <form style={{width:"300px",margin:"auto"}} action="">
                <Input mb={5} placeholder="Enter Email" />
                <Input mb={5} placeholder = "Enter Password" />
                <Input mb={5} placeholder = "Enter Department" />
                <Input mb={5} placeholder = "Enter Role" />
                <Button>Login</Button>

            </form>
        </Box>
    </div>
}

export default AdminLoginForm;