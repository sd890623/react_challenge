import React, {useState} from 'react';
import './Home.css';
import {UserInputBar} from "../../Components/UserInputBar/UserInputBar";
import {TasksList} from "../../Components/TasksList/TasksList";

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
            <TasksList tasks={tasks} />
        </div>
    );
}

export default Home;