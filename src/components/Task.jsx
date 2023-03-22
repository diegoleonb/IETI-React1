import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Task = (props) => {
    const { name, id, done, onTaskClick, onTaskDelete, onTaskEdit} = props;

    const style_color = {
        color: "black",
    };

    const done_style = {
        textDecoration: "line-through",
        color: "black",
    };

    const enterEditText = () => {
        const text = prompt('Edit task');
        onTaskEdit(id, text);
    };

    return (
        <Card sx={{ minWidth: 275}}>
            <CardContent>
                    <Button size="medium" onClick={() => onTaskClick(id)}>

                        {done && '✅'}

                        {!done && '⬜'}  

                        <Typography component = "div">

                        {done? <h4 style={done_style}>{name}</h4> : <h4 style={style_color}>{name}</h4>}

                        </Typography>  

                    </Button>

                </CardContent>

            <CardActions>
                <Button size="small" endIcon = '📝' onClick={() => enterEditText()}>Edit</Button>

                <Button size="small" endIcon = '🗑️' onClick={() => onTaskDelete(id)}>Delete</Button>

            </CardActions>
        </Card>
    );
};
