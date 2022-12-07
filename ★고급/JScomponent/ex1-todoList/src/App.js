import Component from "./components/component.js";
import TodoHeader from "./ToDoHeader.js";
export default class App extends Component {
  setup(){
    console.log("setup");
    this.state={
      inputText: "",
      todoLists: [
        {
          no:1,
          content: '할일1',
          isDone: false
        },
        {
          no:2,
          content: '할일2',
          isDone: false
        },
        {
          no:3,
          content: '할일3',
          isDone: false
        },
      ]
    }
  }
  template(){
    return`
    <div id="insertTodo"></div>
    <div id="listTodos"></div>
    `
  }
  
  mounted(){
    // const {addTodoList} = this;
    const todoHeaer= document.querySelector("#insertTodo")
    new TodoHeader(todoHeaer,{addTodoList: addTodoList.bind(this)});
  }
  addTodoList(content){
    const{ todoLists } =this.state;
    console.log(todoLists);
    this.setState({
      todoLists: [
        ...todoLists,
        {
          no:4,
          content: content,
          isDone: false
        }
      ]
    })
  }
}