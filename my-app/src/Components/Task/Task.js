import './Task.css';

export const Task = props => {
    const { data, index, toggleActive } = props;
    if (!data || !data.name || data.active === undefined) {
        return null;
    }
    return <div className="task">
        <input className="active-checkbox" type="checkbox" checked={data.active} onChange={() => toggleActive(index)}/>
        <span className="task-name">{data.name}</span>
    </div>
}