/**************************
 lists 출력을 하기 위한 js
**************************/

import Component from "./component.js";
import TodoHeader from "./ToDoHeader.js";

export default class App extends Component{
  //Main.js에서 App의 constructor(target,)을 지정했다.
  //이하는 target==div#app에 작성된다.

  setup(){
    console.log("setup");
    this.state = {
      inputText: "",
      todoLists : [
        { no:1, content: '할일1', isDone: false},
        { no:2, content: '할일2', isDone: false},
        { no:3, content: '할일3', isDone: false}
        ]
    }
  }
  // 초기에 입력되어있을 구문  

  template(){
    return `
      <div id="insertTodo"></div>
      <div id="listTodos"></div>
    `;
  }
  // 입력할 구문 

  mounted(){
    const { addTodoList } = this;
    // addTodoList는 this(App)
    const insertTodoDiv = document.querySelector("#insertTodo");
    new TodoHeader(insertTodoDiv,{addTodoList:addTodoList.bind(this)})
    // TodoHeader class의 (target,props)으로 위의 값을 준다.
    // addTodoList:addTodoList.bind(this) => key : value => #insertTodo : App
    // addTodoList.bind(this) => addTodoList함수에서 this 사용할 때 this=this => App
  }
  addTodoList(content){
    const {todoLists}= this.state;
    // 
    this.setState({
      todoLists:[
        ...todoLists,
        {
          no:`${todoLists.length+1}`,
          content: content,
          isDone: false
        }
      ]
    })
  }

}