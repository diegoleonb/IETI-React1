import { Box, Button, ChakraProvider, Container, Flex, Text} from "@chakra-ui/react"
import { Link } from "react-router-dom";
export function Home(){
    return (
        <ChakraProvider>
            <Box background="blackAlpha.900">
                <Flex height="100vh"  justifyContent="center">
                    <Flex direction="column"  padding={50} rounded={6}>
                        <Text fontSize="3xl" mb={6} color={"white"}>Welcome to Task List</Text>
                        <Container centerContent>
                            <Text fontSize="xl" mb={6} color="white"> Github: diegoleonb</Text>
                            <Text fontSize="xl" mb={6} color="white"> linkedin.com/in/diegoleonb</Text>
                            <Button  variant="outline" backgroundColor="whiteAlpha.600" size="lg">
                            <Link to="/tasks">Go to Tasks</Link>
                            </Button>
                        </Container>
                    </Flex>
                </Flex>
            </Box>
            
        </ChakraProvider>
    );
};