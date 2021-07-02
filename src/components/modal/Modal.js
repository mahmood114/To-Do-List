import { useState } from 'react';
import taskMainList from "../../List/TaskMainList";
import { ModalStyle } from "../Styles";
const AddModal = (props) => {

    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    const handleChange = (event) => {
        setTask({ ...task, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        taskMainList.createTask(task);
        props.closeModal();
    }
    return (
        <ModalStyle
            isOpen={props.isOpen}
            onRequestClose={props.closeModal}
            contentLabel="Add task modal"
        >
            <form className="todo-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input required type="text" className="form-control" name="title" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea type="text" className="form-control" name="description" />
                </div>
                <button type="submit" className="todo-button">Add Task</button>
            </form>
        </ModalStyle>
    );
};

export default AddModal;