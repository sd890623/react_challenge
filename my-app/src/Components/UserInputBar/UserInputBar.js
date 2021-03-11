import {Form, Button} from 'react-bootstrap';
import './UserInputBar.css';

export const UserInputBar = props => {
    const { onAddTask } = props;
    const handleSubmit = event => {
        event.preventDefault();
        const userInput = event.target.elements.input.value
        onAddTask(userInput);
    }
    return (
        <Form onSubmit={handleSubmit} className="form-container">
            <Form.Control
                required
                type="text"
                name="input"
                placeholder="Add details"
                className="form-input"
            />
            <Button type="submit" className="form-submit">Submit</Button>
        </Form>
    );
}