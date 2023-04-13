import { Button, ChakraProvider, Box, Text } from '@chakra-ui/react';


export const Task = (props) => {
    const { name, id, descripcion, done, onTaskClick, onTaskDelete, onTaskEdit} = props;

    const style_color = {
        color: "black",
    };

    const done_style = {
        textDecoration: "line-through",
        color: "black",
    };

    const enterEditText = () => {
        const text = prompt('Edit task');
        if(text !== null && text.length > 0){
            onTaskEdit(id, text);
        }
    };

    return (
        <ChakraProvider>
            <Box paddingTop={5} backgroundColor="blackAlpha.200">
                <Button size="sm" variant="outline" onClick={() => onTaskClick(id)}>
                {done && '✅'}
                {!done && '⬜'} 
                {done? <h5 style={done_style}>{name}</h5> : <h5 style={style_color}>{name}</h5>}
                </Button>
                <Text fontSize="sm" mb={6} color="black" paddingStart={5}>{descripcion}</Text>
                <Button variant="outline" size="sm" rightIcon='📝' onClick={() => enterEditText()}>
                    Edit
                </Button>
                <Button variant="outline" size="sm" rightIcon='🗑️' onClick={() => onTaskDelete(id)}>
                    Delete
                </Button>
            </Box>
        </ChakraProvider>  
    );
};
