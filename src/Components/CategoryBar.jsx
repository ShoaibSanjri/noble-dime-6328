import {Heading,HStack,Box,Image,Input} from "@chakra-ui/react"
function CategoryBar(){
    return <div>
        <HStack spacing={20} ml={300} mt="15px" >
            <Box>HOT DEALS</Box>
            <Box>MEN</Box>
            <Box>WOMEN</Box>
            <Box>ACCESSORIES</Box>
            <Box>WINTERWEAR</Box>
        </HStack>

    </div>
}

export default CategoryBar;