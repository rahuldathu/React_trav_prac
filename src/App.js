import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddTask from "./Components/AddTask";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import Footer from "./Footer";
import About from "./About";


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  //delete task
  // const deleteTask = (id) => {
  //   console.log('delete', id)
  // }
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[])

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method : 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    // console.log(data)
    return data
  }
  
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()


    // console.log(data)
    return data
  }
//toggle reminder
const toggleReminder = async (id) => {

  const taskToToggle = await fetchTask(id)
  const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method : 'PUT',
    headers : {
      'Content-type' : 'application/json'
    },
    body : JSON.stringify(updTask)
  })

  const data = res.json()
  // setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task ))
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task ))
}

//Add Task
const addTask= async (task) => { //ftob

  const res = await fetch('http://localhost:5000/tasks',{
    method: 'POST',
    headers: {
      'Content-type' : 'application/json' 
    },
    body : JSON.stringify(task)
  })

  const data = await res.json() //data sent is just new data added not the entire tasks array

  setTasks([...tasks, data])


  // console.log(task)
  // const id = Math.floor(Math.random() * 10000) + 1
  // const newTask = {id, ...task}
  // setTasks([...tasks, newTask])

}

  return (

    <Router>
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} title="TASK TRACKER"/>
      <Route path="/" exact render={(props) => {

        <>
        {showAddTask && <AddTask onAdd={addTask} /> }
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to show'}
      {/* <ReactOnly title='Only react branch should have this'></ReactOnly> */}
      </>
      }}></Route>
      <Route path='/about' Component={About}/>
      <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
