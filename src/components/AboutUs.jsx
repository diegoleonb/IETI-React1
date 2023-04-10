export function AboutUs(){
    return(
        <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h1>About Us</h1>
            </div>
            <p>This is a simple project about task list made with React</p>
            <h3>Here you can: </h3>
            <ul>
                <li>Add tasks</li>
                <li>Mark tasks as done</li>
                <li>Mark tasks as undone</li>
                <li>Edit tasks</li>
                <li>Delete tasks</li>
            </ul>
            <h3>To do this we use: </h3>
            <ul>
                <li>React</li>
                <li>React Router</li>
                <li>React Hooks like: </li>
                <ul>
                    <li>useState</li>
                    <li>useEffect</li>
                    <li>useForm</li>
                </ul>
                <li>Material UI for Card and Button</li>
            </ul>
        </div>
    );
};