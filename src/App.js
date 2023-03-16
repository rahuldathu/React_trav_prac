import { useState } from "react";
import AddTask from "./Components/AddTask";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Grocery shopping",
      day: "Feb 7th at 5:30pm",
      reminder: true,
    }
  ])

  //delete task
  // const deleteTask = (id) => {
  //   console.log('delete', id)
  // }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

//toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task ))
}

//Add Task
const addTask= (task) => {
  // console.log(task)
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

  return (
    
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} title="TASK TRACKER"/>
      {showAddTask && <AddTask onAdd={addTask} /> }
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to show'}
      {/* <ReactOnly title='Only react branch should have this'></ReactOnly> */}
    </div>
    
    
  );
}

export default App;
