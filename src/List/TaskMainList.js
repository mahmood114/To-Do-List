import { makeAutoObservable } from "mobx";
import axios from "axios";
import data from "../Data";

class TaskMainList {
    data = data;

    constructor() {
        makeAutoObservable(this);
    }

    deleteTask = async (taskId) => {
        try {
            await axios.delete(`http://localhost:8000/tasks/${taskId}`);
            const updatedTasks = this.data.filter((task) => task.id !== taskId);
            this.data = updatedTasks;

        } catch (error) {
            console.log(error);
        }

    }

    createTask = async (newTask) => {
        try {
            await axios.post(`http://localhost:8000/tasks`, newTask);
            newTask.id = this.data.length + 1;
            this.data.push(newTask);
            console.log(newTask);
        } catch (error) {
            console.log(error);
        }

    };

    completeTask = async (taskId) => {
        try {
            const task = this.data.find(task => task.id === taskId)
            task.done = !task.done;
            const taskDone = task.done;
            await axios.put(`http://localhost:8000/tasks/${taskId}`, { "done": taskDone });
        } catch (error) {
            console.log(error);
        }

    }

    fetchList = async () => {
        try {
            const response = await axios.get("http://localhost:8000");
            this.data = response.data;
            console.log(response.data);

        } catch (error) {
            console.error("Something didn't work")
        }
    }
}

const taskMainList = new TaskMainList();
taskMainList.fetchList();

export default taskMainList;