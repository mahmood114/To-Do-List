import React from 'react';
import taskMainList from "../List/TaskMainList";
import TaskItem from "./TaskItem";
import { observer } from 'mobx-react';

const TasksList = () => {
    const dataList = taskMainList.data
        .filter(task => !task.done)
        .map((task) => <TaskItem task={task} />);

    const doneTasks = taskMainList.data
        .filter(task => task.done)
        .map(task => <TaskItem task={task} />);

    const viewCompleted = () => {
        if (doneTasks.length !== 0)
            return (
                <div>
                    <h1>Completed Tasks</h1>
                    {doneTasks}
                </div>
            )
    }
    
    return (
        <div className="todo-list">
            {dataList}
            {viewCompleted()}
        </div>
    );
};
export default observer(TasksList);