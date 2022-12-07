import Component from "./components.js";

export default class ContentInput extends Component{
  template(){
    return`
    <input type="text" class="appender"/>
    `;
  }
  setEvent(){
    const {addStudent} = this.props; // this.props.addStudent
    this.target.addEventListener("keyup",(e)=>{
      console.log(e);
      if(e.key !== "Enter") return;
      addStudent(e.target.value);
    })
  }
}