import React, {useState} from 'react';
import './Home.css';
import {UserInputBar} from "../../Components/UserInputBar/UserInputBar";
import {TasksList} from "../../Components/TasksList/TasksList";

export const onAddTask = (newTaskName, tasks, updateTasks) => {
    updateTasks([...tasks, {name: newTaskName, active: false}]);
};

export const onToggleTaskActiveByIndex = (providedIndex, tasks, updateTasks) => {
    updateTasks(tasks.map((task, index)  => ({
        name: task.name,
        active: index === providedIndex ? !task.active : task.active
    })));
};

const Home = () => {
    const [tasks, updateTasks] = useState([]);
    return (
        <div className="home">
            <h1>#Todo</h1>
            <UserInputBar onAddTask={taskName => onAddTask(taskName, tasks, updateTasks)} />
            <TasksList tasks={tasks} onToggleTaskActive={index => onToggleTaskActiveByIndex(index, tasks, updateTasks)} />
        </div>
    );
}

export default Home;