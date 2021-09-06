import React, { useState } from "react";
import   './Todo.css'
import {useSelector , useDispatch } from "react-redux";
import {addTodo, deleteTodo, removeTodo} from '../action/index'
function Todo() {
    const [InputData, setInputData] = useState('')
    const list =useSelector((state)=>{
     return state.todoReducer.list;
    })
    const dispatch=useDispatch()
  return (
    <>
      <div className="main_div">
        <div className="container">
          <h1>Todo Webapp Redux 🎈</h1>
          <div className="additems">
            <input type="text" placeholder="     📝 Start adding..." onChange={(e)=>setInputData(e.target.value.toUpperCase())} value={InputData} />
            <i className="fa fa-plus" onClick={()=>{dispatch(addTodo(InputData), setInputData(''))}}></i>
          </div>

          <div className="showItems">
          {list.map((elem)=>{
            return(
            <div className="eachItem" key={elem.id}>
              <h1>{elem.data}</h1>
              <i className="fa fa-trash-alt" onClick={()=>{dispatch(deleteTodo(elem.id))}}></i>
            </div>)
          })}
          </div>
          <button onClick={()=>{dispatch(removeTodo())}}>Remove All</button>
        </div>
      </div>
    </>
  );
}

export default Todo;
