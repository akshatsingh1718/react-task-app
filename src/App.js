import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import Index from "./components/Index";

function App() {

  const [showAddTask, setShowAddTaks] = useState(false);


  return (
    <Router>
      <div className="container mx-auto">
        <Header
          onAdd={() => setShowAddTaks(!showAddTask)}
          showAdd={showAddTask}
        />

        <Routes>
          <Route path="/" element = {<Index showAddTask={showAddTask} />} />
          <Route path="/about" element = {<About />} />  
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
