/**************************
 Header 출력을 하기 위한 js
**************************/

import Component from "./component.js";

export default class TodoHeader extends Component{
  //App.js의 mounted에서 TodoHeader의 constructor(target,prpos)를 지정했다.
  //이하는 target==div##insertTodo에 작성된다.


  template(){
    return `
    <h1>TodoList</h1>
    <div>
        <input type="text" class="appender" />
        <button id="addBtn">+</button>
    </div>
    `
  }
  // 출력할 구문

  setEvent(){
    const { addTodoList } = this. props;
    // addTodoList는 this.props(constructor의 두번째 매개변수)

    document.querySelector("#addBtn").addEventListener("click",()=>{
      addTodoList( document.querySelector(".appender").value);
    })
    // #addBtn 클릭시
    // addTodoList= .appender의 value값 (입력한 구문) 입력
  }
  // props의 값 = input에 입력한 값

}