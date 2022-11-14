import { Box, Button, Heading, Image,SimpleGrid,Text } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import OfferNavbar from "./OfferNavbar";
import SecondFooter from "./SecondFooter";

function Cart(){
    let initdata = JSON.parse(localStorage.getItem('data')) || []
    const [data,setData] = React.useState(initdata)
    const [payment,setPayment] = React.useState(0)
    
    console.log(data)
    // const PaymentFun = (e)=>{
        
    //     // setPayment(payment + data[index].price)
    //     console.log(data[e.target.id])
    // }
    const handleRemove = (e) =>{
        e.target.parentNode.remove();
        data.splice(e.target.id,1)
        // PaymentFun()
        localStorage.setItem('data',JSON.stringify(data))
    }
    return <Box >
        <OfferNavbar />
        <Heading color='grey.400' fontSize={15} >CART</Heading>
        <Box border='1px grey solid' display='flex' mb={20} >
            
            <SimpleGrid  mt={10} gap={5} columns={3} width={800}>
            {data.map((item,index) => 
            
            
                <Box  ml={3}  _hover={{cursor:"pointer"}}  key={item.id} > 
                    <Image  width={300} src={item.image} />
                    <Box display='flex' ><Text fontSize={13} color='gray.600' margin={0} >{item.brand}</Text></Box>
                    <Box fontSize={13} color='gray.500' display='flex' ><Text   >{item.title}</Text></Box>
                    <Box  display='flex'  ><Text fontSize={17} >&#8377;{item.price}</Text></Box>
                    <Button id={index} onClick={handleRemove} >Remove</Button>
                </Box>
                
            
            
            )}
            </SimpleGrid>
            
        
    </Box>
    <Footer />
    <SecondFooter />
        </Box>
    
}

export default Cart;
