import {ChevronDownIcon} from "@chakra-ui/icons"
import { Menu,MenuButton,Button,MenuList,MenuItem, Box,Image,Text, SimpleGrid, transition } from "@chakra-ui/react";
import {useState,useEffect} from "react";
import Navbar from "./Navbar";
import OfferNavbar from "./OfferNavbar";
import React from "react";
import { ContextApi } from "./Context/ContextApi";
// import {ChevronDownIcon} from "@chakra-ui/icons"


function MensClothing(){
    const [data,setData] = useState([]);
    const {cartData,setCartData} = React.useContext(ContextApi)
    var arr = JSON.parse(localStorage.getItem('data')) || []
    useEffect(()=>{
        fetch("http://localhost:3000/data")
        .then(res => res.json() )  
        .then(res => setData(res))
    },[])
    // 
    
    const handleCartClick = (e) =>{
        e.preventDefault()
        arr.push(data[e.target.id])
        // console.log(e.target.id)
        
        localStorage.setItem("data",JSON.stringify(arr))
    }
    // console.log(arr)
    return <div>
        <OfferNavbar />
        <Navbar />  
        <Box  gap={20} display='flex' >
            <Box _hover={{cursor:"pointer"}} position="stick" mt={10} height={200}  ml={100} width={300} >
                <Box display="flex" justifyContent="space-between" fontSize={14} _hover={{
                    cursor:"pointer",
                    color:"teal"
                }} >
                    <Box>Filter</Box>
                    <Box color='teal.600' >Clear All</Box>
                </Box>
                <hr style={{marginTop:"10px"}} />
                <Box mt={2} display="flex" justifyContent="space-between" >
                    <Text color='blackAlpha.600' >Category</Text>
                    <ChevronDownIcon boxSize={7} ></ChevronDownIcon>
                    
                </Box>
                <hr style={{marginTop:"10px"}} />
                <Box mt={2} display="flex" justifyContent="space-between" >
                    <Text color='blackAlpha.600' >Brand</Text>
                    <ChevronDownIcon boxSize={7} ></ChevronDownIcon>
                </Box>
                <hr style={{marginTop:"10px"}} />
                <Box mt={2} display="flex" justifyContent="space-between" >
                    <Text color='blackAlpha.600' >Color</Text>
                    <ChevronDownIcon boxSize={7} ></ChevronDownIcon>
                </Box>
                <hr style={{marginTop:"10px"}} />
                <Box mt={2} display="flex" justifyContent="space-between" >
                    <Text color='blackAlpha.600' >Design</Text>
                    <ChevronDownIcon boxSize={7} ></ChevronDownIcon>
                </Box>
                <hr style={{marginTop:"10px"}} />
                <Box mt={2} display="flex" justifyContent="space-between" >
                    <Text color='blackAlpha.600' >Fit</Text>
                    <ChevronDownIcon boxSize={7} ></ChevronDownIcon>
                </Box>
                <hr style={{marginTop:"10px"}} />
                <Box mt={2} display="flex" justifyContent="space-between" >
                    <Text color='blackAlpha.600' >Sleeve</Text>
                    <ChevronDownIcon boxSize={7} ></ChevronDownIcon>
                </Box>
                <hr style={{marginTop:"10px"}} />
                <Box mt={2} display="flex" justifyContent="space-between" >
                    <Text color='blackAlpha.600' >Type</Text>
                    <ChevronDownIcon boxSize={7} ></ChevronDownIcon>
                </Box>
            </Box>
        
        <SimpleGrid  mt={10} gap={5} columns={3} width={800} >
        
        {data.map((item,index) => 
        
        <Box  ml={3}  _hover={{cursor:"pointer"}}  key={item.id} > 
            <Image  width={300} src={item.image} />
            <Box display='flex' ><Text fontSize={13} color='gray.600' margin={0} >{item.brand}</Text></Box>
            <Box fontSize={13} color='gray.500' display='flex' ><Text   >{item.title}</Text></Box>
            <Box  display='flex'  ><Text fontSize={17} >&#8377;{item.price}</Text></Box>
            <Button onClick={(e) => handleCartClick(e)} id={index} >Add to Cart</Button>
        </Box>
        
        )}
    </SimpleGrid>
        </Box>
    </div>
}

export default MensClothing;