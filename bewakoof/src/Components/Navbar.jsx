import {Heading,HStack,Box,Image,Input, Button} from "@chakra-ui/react"
import {Search2Icon} from "@chakra-ui/icons"
import {Link} from "react-router-dom";
import MensClothing from "./MenClothing";

function Navbar(){
    const handleLogin = (e) =>{
        
        console.log(e.target)
    }
    const handleMenClick = () =>{
        
    }
    return <div>
        <HStack marginLeft={50} spacing={250} marginTop='10px' >
            <HStack gap={3} >
                <Image height="22px" src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg" ></Image>
                <Link to="/men-clothing" ><Button  textAlign="bottom" >Men</Button></Link>
                <Button>Women</Button>
                <Button>Mobile Covers</Button>
            </HStack>
            <HStack spacing={3} >
                <Input width={300} fontSize={12} placeholder="Search by product,category or collection" ></Input>
                <Box>|</Box>
                <Link to="/login"><Button >Login</Button> </Link>
                <Box> <Image width={30} src="https://cdn-icons-png.flaticon.com/128/7299/7299761.png" alt="" /> </Box>
                <Box> <Link to='/cart' ><Image  width={30} src="https://cdn-icons-png.flaticon.com/128/126/126515.png" alt="" /></Link> </Box>
                <Box> <Image width={30} src="https://cdn-icons-png.flaticon.com/128/3909/3909444.png" alt="" /> </Box>
            </HStack>
        </HStack>

    </div>
}

export default Navbar;