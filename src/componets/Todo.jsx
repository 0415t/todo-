import { useState } from 'react'


function Todo() {
  //useStateとは、
  const [todo, setTodo] = useState({});

  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const [todos, setTodos] = useState([]);

  const changeTodo = (i ,name,value) =>{
    console.log("i" +  i);
    console.log("name" + name);
    console.log("value" + value);

    const newTodos = todos.map((todo, index) => {
      console.log(todo , index);
      if(i === index){
        return{...todos, name:value}
      }
      return todo;
    })
    
    console.log(newTodos);
    setTodos(newTodos);
  }

  const addTodo = () =>{
    setTodo({title: title??"", text: text??""})//ここはいるのか？
    console.log("text" + text);
    console.log("title" + title);
    console.log("todos" + todo);
    setTodos([...todos,{check:false,title: title??'', text: text??''}]);
    setText("");
    setTitle("");
  }

  
  const deleteTodo = (index) =>{
    const newTodos =todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  const changeFin = (i) =>{
    const newTodos = todos.map((todo, index) =>{
      if(i === index){
        return {...todo,check:!todo.check};
      }
      return todo
    })
    setTodos(newTodos);
  }

  return (
    <>
    <h1>todoリストと天気予報</h1>
    <input
      value={title}
      placeholder='タイトル'
      onChange={(e) => setTitle(e.target.value)}
    />
    <input
      value={text}
      placeholder='内容を入力してください'
      onChange={(e) => setText(e.target.value)}
    />
    <button className="bg-indigo-700 font-semibold test-white py-2 px-4 rounded"
    onClick={addTodo}>追加</button>
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todo.check === true}
            onChange={(e) => changeFin(index)}
          />
          <input
            name ="title"
            type ="text"
            value={todo.title}
            disabled={todo.check === true}
            onChange={(e) => changeTodo(index,e.target.name,e.target.value)}
          />
        <br></br>
          <input
            name ="text" 
            type ="text"
            value={todo.text}
            disabled={todo.check === true}
            onChange={(e) => changeTodo(index,e.target.name,e.target.value)}
          />
        <button onClick={() => deleteTodo(index)}>
          削除
        </button>
        </li>
      ))}
    </ul>

    </>
    
  )
}


export default Todo;
