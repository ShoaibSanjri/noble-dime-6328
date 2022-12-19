import {SimpleGrid,Box,Image } from "@chakra-ui/react"
function Discount(){
    return <SimpleGrid columns={2} spacing={3} mt={5} >
        <Box>
            <Image src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-buy2-at-599-1666352224.jpg" />
        </Box>
        <Box>
            <Image src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-buy2at899-1667809501.jpg" />
        </Box>
        <Box>
            <Image src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-plussize-store-men-1666532800.jpg" />
        </Box>
        <Box>
            <Image src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-buy2get1-1668060152.jpg" />
        </Box>

    </SimpleGrid>
}

export default Discount;