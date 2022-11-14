import React from "react";

export const ContextApi = React.createContext();
const initState = {
    
    "image":"",
    "brand":"",
    "title":"",
    "price":""
}

function ContextApiProvider({children}){
    const [bseller,setBseller] = React.useState(0);
    const [AddProduct, setAddProduct] = React.useState(initState)
    const [cartData,setCartData] = React.useState([])

    const value = {bseller,setBseller,AddProduct,setAddProduct,cartData,setCartData}
    return <ContextApi.Provider value={value} >
        {children}
    </ContextApi.Provider>
}

export default ContextApiProvider;

