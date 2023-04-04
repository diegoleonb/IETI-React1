import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
        <Card sx={{ minWidth: 250, maxHeight: 160}}>
            <CardContent>
                    <Button size="small" onClick={() => onTaskClick(id)}>

                        {done && '✅'}

                        {!done && '⬜'}  

                        <Typography component = "div">

                        {done? <h5 style={done_style}>{name}</h5> : <h5 style={style_color}>{name}</h5>}

                        </Typography>  

                    </Button>

                    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        {descripcion}
                    </Typography>

                </CardContent>

            <CardActions>
                <Button size="small" endIcon = '📝' onClick={() => enterEditText()}>Edit</Button>

                <Button size="small" endIcon = '🗑️' onClick={() => onTaskDelete(id)}>Delete</Button>

            </CardActions>
        </Card>
    );
};
