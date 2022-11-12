import {HStack,Box,Input, Image, Heading, Text,SimpleGrid,Grid, GridItem} from "@chakra-ui/react"

const list = [
    {
        src:"https://images.bewakoof.com/uploads/grid/app/category-box-new-1-1665646057.jpg",
        category:"Printed T-shirts"
    },
    {
        src:"https://images.bewakoof.com/uploads/grid/app/category-box-new-fullsleeves-men-1665149767.jpg",
        category:"Full Sleeves T-shirts"
    },
    {
        src:"https://images.bewakoof.com/uploads/grid/app/category-box-new-oversizedtees-1661866116.jpg",
        category:"Oversized T-shirts"
    },
    {
        src:"https://images.bewakoof.com/uploads/grid/app/category-box-7-1662981567.jpg",
        category:"Sweaters"
    },
    {
        src:"https://images.bewakoof.com/uploads/grid/app/category-box-8-1662981567.jpg",
        category:"Jackets"
    },
    {
        src:"https://images.bewakoof.com/uploads/grid/app/category-box-6-1662981566.jpg",
        category:"SweatShirts & Hoddies"
    },
    {
        src:"https://images.bewakoof.com/uploads/grid/app/category-box-new-1661866109.jpg",
        category:"Polo T-shirts",
    },
    {
        src:"https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1661866115.jpg",
        category:"Joggers"
    },
    {
        src:"https://images.bewakoof.com/uploads/grid/app/category-box-new-shirts-1662044509.jpg",
        category:"Shirts"
    },
    {
        src:"https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Boxers-1657526325.jpg",
        category:"Boxers"
    },
    {
        src:"https://images.bewakoof.com/uploads/grid/app/category-box-new-shorts-1661866118.jpg",
        category:"Shorts"
    },
    {
        src:"https://images.bewakoof.com/uploads/grid/app/category-box-new-accessories-covers-1661866111.jpg",
        category:"Mobile Covers"
    },
]

function PopularCategories(){
    return ( <Grid templateColumns='repeat(6, 1fr)' gap={6} >
        { list.map((item) => 
        
            <GridItem>
                <Image src={item.src} />
                
            </GridItem>
         ) }
    </Grid> )
}

export default PopularCategories;
//  