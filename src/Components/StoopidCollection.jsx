import { HStack, Image,SimpleGrid,Box } from "@chakra-ui/react";

function StoopidCollection(){
    return <div>
        <h1 style={{fontSize:"16px",fontWeight:"bold"}} >THE STOOPID COLLECTION</h1>
        <SimpleGrid columns={2} spacing={10} mt={5} >
            <Box>
                <Image src="https://images.bewakoof.com/uploads/grid/app/jackets-mid-size-1667293853.jpg" />
            </Box>
            <Box>
                <Image src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-playbybewakoof-1666532963.jpg" />
            </Box>
            <Box>
                <Image src="https://images.bewakoof.com/uploads/grid/app/undrdawg-mid-banner-1667495646.jpg" />
            </Box>
            <Box>
                <Image src="https://images.bewakoof.com/uploads/grid/app/me-shirt-men-1658682131--1--1666890085.png" />
            </Box>
        </SimpleGrid>
        <Image src="https://images.bewakoof.com/uploads/grid/app/desktop---strip-1440---x-150---tribe-1634552003.png" />
        <Image mt={5} src="https://images.bewakoof.com/uploads/grid/app/VoteForDesign-ThinStrip-Desktop-Revised-1667372740.gif" />
    </div>
}

export default StoopidCollection;