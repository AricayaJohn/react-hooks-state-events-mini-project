import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  //show tasks
  const [ tasks, setTasks ] = useState(TASKS);
  const [ selectedCategory, setSelectedCategory ] = useState("All")

  const handleDelete = ( text ) => {
    setTasks(tasks.filter((task) => task.text !== text))
  }

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask ]);
  }
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  }

  const filteredTasks = selectedCategory === "All" ? tasks : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} onCategoryChange = {handleCategoryChange} />
      <NewTaskForm categories = {CATEGORIES} onTaskFormSubmit = {handleTaskFormSubmit} />
      <TaskList tasks = { filteredTasks } onDeleteTask={handleDelete}/>
    </div>
  );
}

export default App;
