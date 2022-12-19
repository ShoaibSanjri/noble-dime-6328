import {Box,Button,Input,Image,Text,Heading} from "@chakra-ui/react"
import Navbar from "./Navbar";
import OfferNavbar from "./OfferNavbar";
function Login(){
    
    return <Box>
        <OfferNavbar />
        <Navbar />
        <Box mt={30} display="flex" gap={200} >
            <Box marginLeft={30} >
                <Heading mt={5} mb={10} fontSize={25} letterSpacing={2} >Welcome to the world of Bewakoof!</Heading>
                <Image  width={600} height={450} src="https://images.bewakoof.com/web/group-19-1617704502.png"/>
            </Box>
            <Box    >
                <Text fontSize={22} mb={3} fontWeight="bold" >Log in / Sign up</Text>
                <Text mb={10} fontSize={20} >for Latest trends, exciting offers and everything Bewakoof!</Text>
                <Box width={400} margin="auto">
                    <Box margin="auto" >
                        <Input placeholder= " Enter Mobile Number"  />
                        <Button width={400} bg="blue.200" mt={3}  >CONTINUE</Button>
                    </Box>
                    <br />
                    <Box display="flex" >
                        <hr width="180px" />
                        <p>OR</p>
                        <hr width="180px" />
                    </Box>
                    <br />
                    <Button margin="auto" width={300} > <Image mr={5} src="https://cdn-icons-png.flaticon.com/512/2504/2504727.png" width="20px" />  CONTINUE WITH EMAIL</Button>
                   
                    <Box display="flex"gap={3} mt={3}>
                        
                            
                        <Button margin="auto" width={300}   > <Image mr={5} src="https://cdn-icons-png.flaticon.com/512/2504/2504739.png" width="20px" /> GOOGLE</Button>
                        <Button margin="auto" width={300} > <Image mr={5} src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" width="20px" /> FACEBOOK</Button>
                        
                    
                    </Box>
                </Box>
                <Text mt={20} width={350} ml={35} fontSize={13} >By creating an account or logging in, you agree with Bewakoof's Terms and Conditions and Privacy Policy.</Text>
            </Box>
            
        </Box>
        
    </Box>
}

export default Login;