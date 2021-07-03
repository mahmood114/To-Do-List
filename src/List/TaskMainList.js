import { makeAutoObservable } from "mobx";
// import axios from "axios";
import data from "../Data";

class TaskMainList {
    data = data;

    constructor() {
        makeAutoObservable(this);
    }

    deleteTask = (taskId) => {
        const updatedTasks = this.data.filter((task) => task.id !== taskId);
        this.data = updatedTasks;
    }

    createTask = (newTask) => {
        newTask.id = this.data.length + 1;
        this.data.push(newTask);
        console.log(newTask);
    };

    completeTask = (taskId) => {
        const task = this.data.find(task => task.id === taskId)
        task.done = !task.done;
    }

    // fetchList = async () => {
    //     try {
    //         const response = await axios.get("http://localhost:8000");
    //         this.data = response.data;
    //         console.log(response.data);

    //     } catch (error) {
    //         console.error("Something didn't work")
    //     }
    // }
}

const taskMainList = new TaskMainList();
// taskMainList.fetchList();

export default taskMainList;