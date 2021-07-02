import taskMainList from "../../List/TaskMainList";
import { MdDeleteForeverStyle } from "../Styles";

const deleteButton = (props) => {

    const handleDelete = () => {
        taskMainList.deleteTask(props.taskId);

    }
    return (
        <div>
            <MdDeleteForeverStyle size="2em" onClick={handleDelete}>Delete</MdDeleteForeverStyle>
        </div>
    )
}


export default deleteButton;