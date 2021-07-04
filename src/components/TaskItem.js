import DeleteButton from "./buttons/DeleteButton"
import { observer } from "mobx-react";
import { BiTaskStyled } from "./Styles";
import { RiArrowGoBackLine } from "react-icons/ri";
import taskMainList from "../List/TaskMainList";


const TaskItem = (props) => {

    const handleCompleteTask = () => {
        // props.task.done = !props.task.done;
        taskMainList.completeTask(props.task.id);
    }

    const viewDoneButton = () => {
        if (!props.task.done)
            return (
                <BiTaskStyled onClick={handleCompleteTask} size="2em" />
            )
        else return (
            <RiArrowGoBackLine onClick={handleCompleteTask} size="2em" />
        )
    }

    return (
        <div className="todo-col">
            <div className="todo-container ">
                <div className="icons">
                    {viewDoneButton()}
                    <DeleteButton taskId={props.task.id} />
                    <h2>{props.task.title}</h2>
                </div>
                <div className="icons ">
                    <p>{props.task.description}</p>
                </div>
            </div>
        </div>
    )
}

export default observer(TaskItem);