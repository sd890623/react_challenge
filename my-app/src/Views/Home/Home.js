import React, {useState} from 'react';
import {UserInputBar} from "../../Components/UserInputBar/UserInputBar";
import './Home.css';

export const onAddTask = (newTaskName, tasks, updateTasks) => {
    updateTasks([...tasks, {name: newTaskName, active: false}]);
};

const Home = () => {
    const [tasks, updateTasks] = useState([]);
    console.log(tasks);
    return (
        <div className="home">
            <h1>#Todo</h1>
            <UserInputBar onAddTask={taskName => onAddTask(taskName, tasks, updateTasks)} />
        </div>
    );
}

export default Home;