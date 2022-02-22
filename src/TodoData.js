import "./styles.css";
// import App from "./App";
// Import your dependencies here...

export default function TodoData(props) {
  return (
    <div className="App">
      {props.todoList.map((data, index) => {
        return (
          <div>
            <span>{data}</span> &ensp;
            <button onClick={() => props.deleteTodo(index)}>Delete</button>
            &ensp;
            <button onClick={() => props.updateTodo(index, data)}>
              Update
            </button>
          </div>
        );
      })}
    </div>
  );
}
