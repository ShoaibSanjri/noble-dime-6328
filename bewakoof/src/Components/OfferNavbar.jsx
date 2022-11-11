import {Box,HStack} from "@chakra-ui/react"
function OfferNavbar(){
    return (
        <div style={{backgroundColor:"RGBA(0, 0, 0, 0.08)"}} >
            <HStack marginLeft={100} spacing={650}  >
            <HStack>
                <Box>Offers</Box>
                <Box>Fanbook</Box>
                <Box>Download App</Box>
                <Box>Tribe Members</Box>
            </HStack>
            <HStack>
                <Box>Contact Us</Box>
                <Box>Track Order</Box>
            </HStack>
        </HStack>
        </div>
    )
    
}
export default OfferNavbar;