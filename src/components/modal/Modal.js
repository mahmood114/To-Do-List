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
                    <textarea type="text" className="form-control" name="description" onChange={handleChange} />
                </div>
                <div class="row mb-0">
                    <div class="row justify-content-start">
                        <div class="col-12">
                            <div className="space-between-the-radio">
                                <input type="radio" name="priority" id="high" value="3" onChange={handleChange} />
                                <label for="high">High</label>
                                <input type="radio" name="priority" id="moderate" value="2" onChange={handleChange} />
                                <label for="moderate">Moderate</label>
                                <input type="radio" name="priority" id="low" value="1" onChange={handleChange} />
                                <label for="low">Low</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="todo-button">Add Task</button>
            </form>
        </ModalStyle>
    );
};

export default AddModal;