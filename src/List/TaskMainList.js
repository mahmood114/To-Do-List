import { makeAutoObservable } from "mobx";
// import axios from "axios";
import data from "../Data";

class TaskMainList {
    data = data;

    constructor() {
        makeAutoObservable(this);
    }

    deleteTask = (taskId) => {
        const updatedTask = this.data.filter((task) => task.id !== taskId);
        this.data = updatedTask;
    }

    createTask = (newTask) => {
        newTask.id = this.data[this.data.length - 1].id + 1;
        this.data.push(newTask);
    };


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