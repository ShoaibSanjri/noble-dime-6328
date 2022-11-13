import {Heading,HStack,Box,Image,Input, Button} from "@chakra-ui/react"
import {Search2Icon} from "@chakra-ui/icons"
import {Link} from "react-router-dom";

function Navbar(){
    const handleLogin = (e) =>{
        
        console.log(e.target)
    }
    return <div>
        <HStack marginLeft={100} spacing={250} marginTop='10px' >
            <HStack gap={3} >
                <Image height="22px" src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg" ></Image>
                <Box textAlign="bottom" >Men</Box>
                <Box>Women</Box>
                <Box>Mobile Covers</Box>
            </HStack>
            <HStack spacing={3} >
                <Input width={300} fontSize={12} placeholder="Search by product,category or collection" ></Input>
                <Box>|</Box>
                <Link to="/login"><Button >Login</Button> </Link>
                <Box> <Image width={30} src="https://cdn-icons-png.flaticon.com/128/7299/7299761.png" alt="" /> </Box>
                <Box> <Image width={30} src="https://cdn-icons-png.flaticon.com/128/126/126515.png" alt="" /> </Box>
                <Box> <Image width={30} src="https://cdn-icons-png.flaticon.com/128/3909/3909444.png" alt="" /> </Box>
            </HStack>
        </HStack>

    </div>
}

export default Navbar;