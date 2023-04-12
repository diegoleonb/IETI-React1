import { Box, ChakraProvider, Container, Flex, ListItem, OrderedList, Text} from "@chakra-ui/react"

export function AboutUs(){
    return(
        <ChakraProvider>
            <Box background="blackAlpha.900">
                <Flex height="100vh"  justifyContent="center" padding={50} > 
                    <Text fontSize="3xl" mb={6} color={"white"}>About Us: </Text>
                    <Container>
                        <Text fontSize="xl" mb={6} color="white"> This is a simple project about task list made with React</Text>
                        <Text fontSize="xl" mb={6} color="white"> Here you can: </Text>
                        <OrderedList color={"white"}>
                            <ListItem>Add tasks</ListItem>
                            <ListItem>Mark tasks as done</ListItem>
                            <ListItem>Mark tasks as undone</ListItem>
                            <ListItem>Edit tasks</ListItem>
                            <ListItem>Delete tasks</ListItem>
                        </OrderedList>
                        <Text fontSize="xl" mb={6} color="white" paddingTop={10}> To do this we use: </Text>
                        <OrderedList color={"white"}>
                            <ListItem>React</ListItem>
                            <ListItem>React Router</ListItem>
                            <ListItem>React Hooks like: </ListItem>
                            <OrderedList color={"white"}>
                                <ListItem>useState</ListItem>
                                <ListItem>useEffect</ListItem>
                                <ListItem>useForm</ListItem>
                            </OrderedList>
                            <ListItem>Material UI for Card and Button</ListItem>
                            <ListItem>Chakra UI</ListItem>
                        </OrderedList>
                    </Container>      
                </Flex>  
            </Box>
        </ChakraProvider>
    );
};
