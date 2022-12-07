import Component from "./components.js";

export default class Lists extends Component{
  template(){
    const {students} =this.props // const students= this.props.students // props는 App.js의 {students: students}
    return`
      <ul>
        ${students.map(i=>`<li data-no="${i.no}">
        ${i.contents}
        <button class="activeBtn">${i.active? `비활성`: `활성`}</button>
        <button class="deleteBtn" data-no="${i.no}">삭제</button>
        </li>`).join("")}
      </ul>
    `
  }
  setEvent(){
    const {deletStudent} = this.props;
    this.target.addEventListener("click",(e)=>{
      if(e.target.classList.contains('deleteBtn')){
        console.log("delefetd");
        deletStudent(Number(e.target.dataset.no))
      }
    })
    /****************************************************/
    const {students}= this.props
    this.target.addEventListener("click",(e)=>{
      if(e.target.classList.contains(`activeBtn`)){
        e.target.textContent=="활성";
      }
    })

  }
}