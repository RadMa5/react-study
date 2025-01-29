import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Todo() {

    const [todoList, setTodoList] = React.useState([
                { id: 1, text: "Это первый комментарий" },
                { id: 2, text: "Это второй комментарий" },
                { id: 3, text: "Это третий комментарий" }
    ]);

    const [newText, setNewText] = React.useState("");

    function addTask() {
        const taskText = document.getElementById("taskText").value;
        if(taskText == ""){
            alert("Task box is empty");
        } else {
            let lastEntry = todoList[todoList.length-1];
            let lastKey = parseInt(lastEntry.id + 1);
            let newEntry = {id: lastKey, text: taskText};

            const newList = todoList;
            newList.push(newEntry);
            setTodoList(newList);
            console.log(todoList);
        }
    }

    function deleteTodo(deleteId) {
        let newArr = todoList.toSpliced(deleteId - 1, 1);
        for(let i = deleteId - 1; i < todoList.length - 1; i++){
            newArr[i].id = newArr[i].id - 1;
            console.log(newArr[i].id);
        }
        setTodoList(newArr);
    }

    return (
        <div>
            <TextField
                id="taskText"
                label="Todo"
                multiline
                maxRows={4}
                onChange={(e) => setNewText(e.target.value)}
            />
            <Button variant="outlined" onClick={() => addTask()}>Add the task</Button>
            {todoList.map((task) => 
                <div key={task.id}>
                    {task.text}
                    <IconButton onClick={() => deleteTodo(task.id)}><DeleteIcon /></IconButton>
                </div>)
            }
        </div>
    );
}

