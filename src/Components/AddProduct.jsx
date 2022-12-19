import { Box, Heading, Input,Image,Alert,AlertIcon } from "@chakra-ui/react";
import { ContextApi } from "./Context/ContextApi";
import React from "react";
import {Link} from "react-router-dom"
// import {AlertIcon} from '@chakra-ui/icons'

function AddProduct(){
    const {AddProduct,setAddProduct} = React.useContext(ContextApi)
    const [click,setClick] = React.useState(false)
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setAddProduct({...AddProduct,[name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(AddProduct)
        setClick(!click)
        // setAddProduct({})
        
    }
    React.useEffect(() =>{
        fetch("http://localhost:3000/data",{
            method:"POST",
            body:JSON.stringify(AddProduct),
            headers:{
                "Content-Type":"application/json"
            }
        })
    },[click])
    const styles = {
        width:"300px",
        display:"flex",
        flexDirection:"column",
        margin:"auto",
        marginTop:"10px",
        gap:"20px",
        // border:"1px grey solid",
        
    }
    return <div>
        
        {click ? <Alert status='success' variant='subtle'>
            <AlertIcon />
            Data uploaded to the server. Fire on!
        </Alert> :""}
        <Box>
            <Heading mt={20} > Product Details</Heading>
            <form onSubmit={handleSubmit} style={styles} action="">
                <Input boxShadow='x' onChange={handleChange} type="text" name="image" id="" placeholder="Enter Image" />
                <Input boxShadow='x' onChange={handleChange} type="text" name="brand" id="" placeholder="Enter Brand" />
                <Input boxShadow='x' onChange={handleChange} type="text" name="title" id="" placeholder="Enter product name" />
                <Input boxShadow='x' onChange={handleChange} type="text" name="price" id="" placeholder="Enter Price" />
                <Input boxShadow='x'  _hover={{bg:"blue.300"}} type="submit" name="" id="" />
            </form>
        </Box>
        
    </div>
}

export default AddProduct;