import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import TaskItem from "./components/taskItem";

const App = () => {
    const [task, setTasks] = useState([
        {
            id: "1",
            description: "estudar programação",
            isCompleted: false,
        },
        {
            id: "2",
            description: "ler",
            isCompleted: true,
        },
    ]);

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/tasks");
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <>
            {task.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </>
    );
};

export default App;
