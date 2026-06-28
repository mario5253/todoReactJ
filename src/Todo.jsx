import { useState } from 'react';
import { InputTodo } from './components/inputTodo';
import { InCompleteTodos } from './components/inCompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

function Todo() {
  const[todoText, setTodoText] = useState("");  
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }
  const onclickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodos);
  }
  const isMaxLimitIncompleteTodos = incompleteTodos.length >=5;
  return (
    <>
      <h1>TODOアプリ</h1> 
      <InputTodo 
        todoText={todoText} 
        onChange={onChangeTodoText} 
        onClick={onClickAdd}
        disabled={isMaxLimitIncompleteTodos}
      />
      {isMaxLimitIncompleteTodos && (
        <p style={{color: "red",fontWeight: "bold"}}>登録できるTODOは５件までです。</p>
      )}
      
      <InCompleteTodos
        todos ={incompleteTodos}
        onclickComplete = {onclickComplete}
        onClickDelete = {onClickDelete}
      />
      <CompleteTodos
        todos = {completeTodos}
        onClickBack= {onClickBack}
      />
    </>
  )
}

export default Todo
