import Component from "./components/component.js";

export default class TodoHeader extends Component{
  template(){
    return`
    <h1>TodoList</h1>
    <div>
      <input type="text" class="appender"/>
      <button id="addBtn">+</button>
    </div>
    `
  }

  
  setEvent(){
    document.querySelector("#addBtn").addEventListener("click",()=>{
      addTodoList(document.querySelector(".appender").value)
    })
  }



}