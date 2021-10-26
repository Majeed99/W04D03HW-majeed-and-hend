import { useState } from "react";
import React from "react";
function ToDo() {
  let [ToDos, setToDos] = useState([]);
  let [Counters, setCounters] = useState([]);
  function addNew(e) {
    // console.log(e);
    // console.log(e.target.parentElement.children[1]);
    let input = e.target.parentElement.children[3].value;
    setToDos((oldArray) => [...oldArray, input]);
    setCounters((oldArray) => [...oldArray, 0]);
  }

  function deleteElement(e) {
    let index = e.target.id;
    ToDos.splice(index, 1);
    setToDos((oldArray) => [...oldArray]);
  Counters.splice(index,1);
  setCounters((oldArray) => [...oldArray])
  }

  function plus(e) {
    let index = e.target.id;
    let num = Counters[index];
    Counters.splice(index, 1, num + 1);

    setCounters((oldArray) => [...oldArray]);
  }
  function minus(e) {
    let index = e.target.id;
    let num = Counters[index];
    Counters.splice(index, 1, num - 1);

    setCounters((oldArray) => [...oldArray]);
  }

  return (
    <div>
      <h1>ToDo</h1>
      <ul id="myUl">
        {ToDos.map((el, index) => (
          <li key={index}>
            {el}
            <button id={index} onClick={deleteElement}>
              Delete
            </button>
            <button id={index} onClick={plus}>
              +
            </button>
            <label>{Counters[index]}</label>
            <button id={index} onClick={minus}>
              -
            </button>
          </li>
        ))}
      </ul>
      <h1>What needs to be done</h1>
      <input id="input1" type="text"></input>
      <button onClick={addNew}>Add</button>
    </div>
  );
}

export default ToDo;
