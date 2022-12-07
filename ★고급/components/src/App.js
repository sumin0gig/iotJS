import Component from "./Components/components.js";
import ContentInput from "./Components/contentInput.js";
import Lists from "./Components/Lists.js";

export default class App extends Component{
  setup(){
    this.state={ //this= App
      students: [
        {no:1, contents:"stu1", active:true},
        {no:2, contents:"stu2", active:false},
        {no:3, contents:"stu3", active:false},
      ]
    }
  }
  template(){
    return`
    <div id="contentAdd"></div>
    <div id="studentLists"></div>
    <div id="viewBtn"></div>
    `
  }
  mounted(){
    const {students}= this.state //= const students= this.state.students
    const {addStudent, deletStudent}= this;
    console.log(students);
    const contentAppender = document.querySelector("#contentAdd")
    new ContentInput(contentAppender,{addStudent:addStudent.bind(this)}); // ContentInput에서 사용될것이지만, 이 addStudent 함수의 this는 App의 this를 사용하므로 bind시킴
    const contentLists = document.querySelector("#studentLists")
    new Lists(contentLists,{
      students: students,
      deletStudent: deletStudent.bind(this),
    }); // 추후 key값으로 student의 내용을 부르기 위해 {}로 작성
  }

  addStudent(contents){
    const {students} = this.state;
    const no = Math.max(0,...students.map(i=>i.no+1)) // (0,2,3,4) 이므로 4 (students.map(i=>i.no)=[1,2,3])
    //length로 no를 지정하기에는, 삭제한 li가 있을 시 no가 꼬이게 된다!
    this.setState({
      students: [...students,{no:no, contents:contents, active:false}]
    })
  }
  deletStudent(no){
    const {students} =this.state;
    const newStudents = students.filter(stu=>stu.no !== no) //(원본 배열에서 갖고온 no와 삭제된 no가 같은 녀석)을 제외한 전원을 return
    console.log(newStudents);
    this.setState({students: newStudents});
  }
}