import {Task} from "../Task/Task";

export const TasksList = props => {
    const { tasks, onToggleTaskActive } = props;
    if (!tasks || tasks.length === 0) {
        return null;
    }
    return (
        <div className="tasks-list">
            {tasks.map((task, index) => <Task key={index} data={task} toggleActive={() => onToggleTaskActive(index)} />)}
        </div>
    )
}