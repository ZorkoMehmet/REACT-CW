import React, { useState, useEffect } from "react";
import AddTask from "../components/addTask/addTask";
import TaskList from "../components/taskList/taskList.jsx";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const [task, setTask] = useState([]);
  const url = "https://63516c99dfe45bbd55bfd9a2.mockapi.io/api/tasks";

  const toggle = (e) => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar";
    setText(buttonText);
  };

  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
    console.log(data);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div>
      <Button onClick={(e) => toggle()} variant="danger" size="lg">
        {text}
      </Button>
      {isOpen && <AddTask />}
      <TaskList />
    </div>
  );
};

export default Home;
