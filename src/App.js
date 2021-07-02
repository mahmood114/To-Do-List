import './App.css';
import TasksList from './components/TasksList';
import AddButton from './components/buttons/AddButton';

function App() {

  return (
    <div className="todo-app">
      <h1> Tasks of the Day </h1>
      <AddButton />
      <TasksList />
    </div>
  );
}

export default App;
