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
        <div className="todo-row">
            <div className="todo-container ">
                <h3>{props.task.title}</h3>
                <div className="icons">
                    {viewDoneButton()}
                    <DeleteButton taskId={props.task.id} />
                </div>
            </div>
            {/* <div >
                {props.task.description}
            </div> */}
        </div>
    )
}

export default observer(TaskItem);