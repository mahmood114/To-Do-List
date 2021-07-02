import DeleteButton from "./buttons/DeleteButton"
import { observer } from "mobx-react";
import { BiTaskStyled } from "./Styles";

const TaskItem = (props) => {

    return (
        <div className="todo-row">
            <div className="todo-container ">
                <h3>{props.task.title}</h3>
                <div className="icons">
                    <BiTaskStyled size="2em" />
                    <DeleteButton taskId={props.task.id} />
                </div>
            </div>
        </div >
    )
}

export default observer(TaskItem);