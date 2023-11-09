import { Flex, Box, Heading, Button, Text, Spacer, HStack } from "@chakra-ui/react"

const Navbar = () => {
  return ( 
    <div>
        <Flex  as="nav"  p="10px" mb="40px" alignItems="center" gap="10px" >
          <Heading as="h1" > Shivaram</Heading>
          <Spacer />
          <HStack gap="20px" >
            <Box bg="gray.200" p="10px" >M</Box>
            <Text>shivarammorigala2003@gmail.com</Text>
            <Button colorScheme="purple" >LogOUT</Button>
          </HStack>
        </Flex>
      {/* <Flex bg="gray.200" justifyContent="space-around" >  
        <Box w="150px" h="50px" bg="red" >1</Box>
        <Box w="150px" h="50px" bg="blue" >2</Box>
        <Box w="150px" h="50px" bg="green" >3</Box>
        <Box w="150px" h="50px" bg="yellow" >4</Box>
      </Flex> */}
    </div>
  )
}  

export default Navbar




