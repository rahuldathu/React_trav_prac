import { useState } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";


function App() {
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
  return (
    
    <div className="container">
      <Header title="TASK TRACKER"/>
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to show'}
      {/* <ReactOnly title='Only react branch should have this'></ReactOnly> */}
    </div>
    
    
  );
}

export default App;
