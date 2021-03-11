import {Task} from "../Task/Task";

export const TasksList = props => {
    const { tasks } = props;
    if (!tasks || tasks.length === 0) {
        return null;
    }
    return (
        <div className="tasks-list">
            {tasks.map((task, index) => <Task data={task} index={index} toggleActive={() => null}/>)}
        </div>
    )
}