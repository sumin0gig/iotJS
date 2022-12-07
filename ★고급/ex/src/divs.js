import Component from "./component.js";
import Lists from "./lists.js";
export default class Divs extends Component{
  template(){
    return`
    <input type="text"  placeholder="내용입력"/>
    <ul></ul>
    <div id="btns">
      <button>전체보기</button>
      <button>활성보기</button>
      <button>비활성보기</button>
    </div>
    `;
  }

  setup(){
    this.state={
      todoLists:[
        {no:1, content:"stu1", isActive: false},
        {no:2, content:"stu2", isActive: false},
        {no:3, content:"stu3", isActive: false}
      ]
    }
  }

  mounted(){
    const { addTodoList } = this;
    new Lists(document.querySelector("ul"), {lists: this.state.todoLists})
  }
  addTodoList(){
    const { todoLists } = this.state;
        console.log(todoLists); 
        console.log(this)
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