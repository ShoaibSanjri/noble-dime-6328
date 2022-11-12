import {HStack,Box,Input, Image, Heading, Text} from "@chakra-ui/react"
let designList = [
    {
        name:"Design of the Day",
        src:"https://images.bewakoof.com/uploads/grid/app/New-thumbnail-DOTD-Men-1667985532.gif"
    },
    {
        name:"Bestsellers",
        src:"https://images.bewakoof.com/uploads/grid/app/new-thumbnail-243-1665572988.jpg"
    },
    {
        name:"Hot Deals",
        src:"https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-daily-deals-additional-10--off-01-1666012651.jpg"
    },
    {
        name:"Customization",
        src:"https://images.bewakoof.com/uploads/grid/app/custom-men--1660921672.jpg"
    },
    {
        name:"New Arrivals",
        src:"https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-new-arrival-1665498051.jpg"
    },
    {
        name:"Last Sizes Left",
        src:"https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-lastsizesleft-1666074760.jpg"
    },
    {
        name:"Plus Size",
        src:"https://images.bewakoof.com/uploads/grid/app/plus-size-1660921675.jpg"
    },
    {
        name:"Official Collaboration",
        src:"https://images.bewakoof.com/uploads/grid/app/offiicale-merch-1660921674.jpg"
    },
    {
        name:"Vote for Designs",
        src:"https://images.bewakoof.com/uploads/grid/app/vote-1660921675.jpg"
    }

]

function DesignSection(){

    return (
    <div>
        <HStack mt={7}  fontSize={13}  >
        {designList.map((item) => <Box > <Image src={item.src} /> <Text fontWeight="bold" >{item.name}</Text> </Box> )}
    </HStack>
    <Image mb={5} src="https://images.bewakoof.com/uploads/grid/app/thun-strip-new-2022-desksite-1667996808.jpg" ></Image>
    <Heading as="h3" fontSize={22} >POPULAR CATEGORIES</Heading>
    </div>

    );
}

export default DesignSection;