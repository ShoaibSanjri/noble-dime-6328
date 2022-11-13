import React from "react";

export const ContextApi = React.createContext();

function ContextApiProvider({children}){
    const [bseller,setBseller] = React.useState(0);

    const value = {bseller,setBseller}
    return <ContextApi.Provider value={value} >
        {children}
    </ContextApi.Provider>
}

export default ContextApiProvider;

