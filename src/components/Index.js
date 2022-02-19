import AddTask from "./AddTask"
import Tasks from "./Tasks"
import { useState, useEffect } from "react";


const Index = ({showAddTask}) => {


    const [tasks, setTasks] = useState([]);
  
    useEffect(() => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks();
        setTasks(tasksFromServer);
      };
  
      getTasks();
    }, []);
  
    // Fetch tasks
    const fetchTasks = async () => {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();
      return data;
    };
  
    // Fetch task
    const fetchTask = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await res.json();
      return data;
    };
  
  
    // add task
    const addTask = async (task) => {
      console.log(task);
      // const id = Math.floor(Math.random() * 10000) + 1;
      const res = await fetch(`http://localhost:5000/tasks`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });
  
      const data = await res.json();
  
      setTasks([...tasks, data]);
    };


  // Delete task
  const deleteTask = async (id) => {
    // console.log("delete", id);
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder
  const toggleReminder = async (id) => {
    console.log(id);

    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();
    console.log(data);

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

    
  return (
    <>
    {showAddTask && <AddTask onAdd={addTask} />}
    {Tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    ) : (
        "No Tasks to show"
    )}
    </>
  )
}

Index.propTypes = {}

export default Index