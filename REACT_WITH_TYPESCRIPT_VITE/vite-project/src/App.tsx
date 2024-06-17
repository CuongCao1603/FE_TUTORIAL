import { TextField, Button } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import { v4 as uuidv4 } from "uuid";
import { CreateNewFolder } from "@mui/icons-material";
import { CreateNewTodo } from "./components/CreateNewTodo";
import { TodoList } from "./components/TodoList";

// viet ham | export: cho phep cac class khac co the import gia tri
export type TodoType = { id: string; name: string; isCompleted: boolean };

// state lưu trữ giá trị nội tại của 1 component
function App() {
  // state
  // <> type parameter
  const [todoList, setTodoList] = useState<TodoType[]>(
    () => {
      const saveTodoList = JSON.parse(localStorage.getItem("todoList") ?? "[]");
      if (saveTodoList?.length) {
        return saveTodoList;
      }
      return [];
    }
    // [
    // { id: 1, name: "Item 1" },
    // { id: 2, name: "Item 2" },
    // { id: 3, name: "Item 3" },
    // { id: 4, name: "Item 4" },
    // ]
  ); // useState la 1 hook [state, setState]

  const [newTodoString, setNewTodoString] = useState(""); // gia tri khoi tao duoc gan la 1 string

  const onAddingBtnClick = () => {
    const newTodoItem: TodoType = {
      id: uuidv4(),
      name: newTodoString,
      isCompleted: false,
    };
    setTodoList([newTodoItem, ...todoList]);
    setNewTodoString("");
  };
  // handler cho su kien onChange
  const onNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoString(e.target.value);
  };

  const updateIsCompleted = (todoId: string) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    });
  };

  // luu data bang localStorage
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  console.log({ newTodoString });
  return (
    <>
      <p>This is Todo App</p>
      <div>
        <CreateNewTodo
          onAddingBtnClick={onAddingBtnClick}
          newTodoString={newTodoString}
          onNewTodoChange={onNewTodoChange}
        />
        <TodoList todoList={todoList} updateIsCompleted={updateIsCompleted} />
        {/* {todoList.map((todo) => {
          return <Todo name={todo.name} />;
        })} */}
      </div>
    </>
  );
}

export default App;
