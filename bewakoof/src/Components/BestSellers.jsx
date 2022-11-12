import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, SimpleGrid,Image } from "@chakra-ui/react";

const BestsellersList = [
    [
        {
            src:"https://images.bewakoof.com/t320/men-s-lilac-bloom-solid-t-shirt-507614-1668075581-1.JPG",
            price:"599"
        },
        {
            src:"https://images.bewakoof.com/t320/men-s-purple-wow-oversized-t-shirt-549266-1668083566-1.jpg",
            price:"699"
        },
        {
            src:"https://images.bewakoof.com/t320/mens-solid-t-shirt-516425-1668071420-1.jpg",
            price:"699"
        },
        {
            src:"https://images.bewakoof.com/t320/the-ryuk-oversized-full-sleeve-t-shirt-554016-1667974663-1.jpg",
            price:"699"
        },
        {
            src:"https://images.bewakoof.com/t320/men-black-plain-t-shirt-539556-1668071378-1.jpg",
            price:"699"
        },
    ],
    [   
        {
        src:"https://images.bewakoof.com/t320/men-black-plain-t-shirt-539556-1668071378-1.jpg",
        price:"699"
        },
        {
            src:"https://images.bewakoof.com/t320/men-lilac-plain-t-shirt-539559-1667398343-1.jpg",
            price:"699"
        },
        {
            src:"https://images.bewakoof.com/t320/men-rose-dawn-plain-t-shirt-540860-1667912491-1.jpg",
            price:"599"
        },
        {
            src:"https://images.bewakoof.com/t320/men-jonny-stripes-printed-t-shirt-516672-1667912683-1.jpg",
            price:"799"
        },
        {
            src:"https://images.bewakoof.com/t320/men-s-beige-mickey-graphic-printed-oversizedt-shirt-516646-1667912529-1.jpg",
            price:"899"
        }
    ]
]

function Bestsellers(){
    var i = 0;
    console.log(BestsellersList[i])
    return <SimpleGrid m={10} border="1px solid red" columns={5} spacing={5} >
            {
                BestsellersList[i].map((item) => <Box> <Image src={item.src} /> </Box>)
            }
            <ChevronRightIcon style={{transform:translate(10,5)}} />
    </SimpleGrid>
}

export default Bestsellers;