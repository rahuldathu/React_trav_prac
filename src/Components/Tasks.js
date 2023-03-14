// const tasks =  [
//       {
//         id: 1,
//         text: "Doctors Appointment",
//         day: "Feb 5th at 2:30pm",
//         reminder: true,
//       },
//       {
//         id: 2,
//         text: "Meeting at School",
//         day: "Feb 6th at 1:30pm",
//         reminder: true,
//       },
//       {
//         id: 3,
//         text: "Grocery shopping",
//         day: "Feb 7th at 5:30pm",
//         reminder: true,
//       }
//     ]
// import { useState } from "react"
import Task from './Task'

const Tasks = ({tasks}) => {
    

  return (
    <>
    {tasks.map((task) => (<Task task={task}></Task>))}
    </>
  )
}

export default Tasks