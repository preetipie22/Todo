import { useState } from "react";
import "./styles.css";
import TodoData from "./TodoData";
// Import your dependencies here...

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [indexBeingUpdated, setIndexBeingUpdated] = useState(0);

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    setTodoList([...todoList, todo]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const updateTodo = (index, data) => {
    setTodo(data);
    setIsUpdate(true);
    setIndexBeingUpdated(index);
  };

  const saveTodo = () => {
    const updatedTodoList = [...todoList];
    setIsUpdate(false);
    console.log("updatedTodoList1" + JSON.stringify(updatedTodoList));
    updatedTodoList.splice(indexBeingUpdated, 1, todo);
    console.log("updatedTodoList2" + JSON.stringify(updatedTodoList));
    setTodoList(updatedTodoList);
    setTodo("");
  };

  const deleteAll = () => {
    setTodoList([]);
  };

  const handleCheckbox = (index) => {
    setIsCheck(true);
  };

  return (
    <div className="App">
      <h1>Hello world of React!</h1>
      <input type="text" value={todo} name="todo" onChange={handleTodo}></input>
      {!isUpdate ? (
        <button onClick={addTodo}>Add</button>
      ) : (
        <button onClick={saveTodo}>Save</button>
      )}
      <button onClick={deleteAll}>DeleteAll</button>
      <div>
        <TodoData
          todoList={todoList}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          handleCheckbox={handleCheckbox}
          isCheck={isCheck}
        />
      </div>
    </div>
  );
}
