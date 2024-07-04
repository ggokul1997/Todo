import { useState } from "react"

function App() {

  const [todo, setTodo] = useState([]);

  const addHandler = ()=>{
    const head = document.getElementById("header").value;
    const det = document.getElementById("details").value;
    head && det && setTodo((p)=>[...p,{header:head,details:det}])
    document.getElementById("header").value="";
    document.getElementById("details").value=""
  }

  const deleteHandler = (i) =>{
    setTodo(()=>todo.filter((_,b)=>b!==i))
  }

  const upHandler=(i)=>{
    if (i>0 ){
      let newTodo = [...todo]
      let c=newTodo[i];
      newTodo[i]=newTodo[i-1];
      newTodo[i-1]=c;
      setTodo(newTodo)
    }
  }

  const downHandler = (i) =>{
    if(i<todo.length-1){
      let newTodo = [...todo]
      let c=newTodo[i];
      newTodo[i]=newTodo[i+1];
      newTodo[i+1]=c;
      setTodo(newTodo)
    }
  }

  const todos = todo.map((a,b)=><li className="todo" key={b}>
      <h3>{a.header}</h3>
      <div>{a.details}</div>
      <div>
      <button onClick={()=>deleteHandler(b)} style={{backgroundColor:"red"}}>delete</button>
      <button style={{backgroundColor:"greenyellow"}} onClick={()=>upHandler(b)}>☝️</button>
      <button style={{backgroundColor:"orange"}} onClick={()=>downHandler(b)}> 👇 </button>
      </div>
  </li>)


  return (
    <>
      <h1 style={{textAlign:"center"}}>TO DO LIST</h1>

      <div className="inputs">
      <span style={{fontFamily:"cursive", fontSize:"25px"}}>Heading:</span>
      <input type="text" id="header"/>
      <span style={{fontFamily:"cursive", fontSize:"25px"}}>Description:</span>
      <input type="text" id="details"/>
      <div>
      <button onClick={addHandler} style={{fontFamily:"cursive", fontSize:"25px",backgroundColor:"green"}}>Add</button>
      
      </div>
      </div>
      
      {todo.length!==0 && (<ul>
        {todos}
      </ul>)}
    </>
  )
}

export default App
