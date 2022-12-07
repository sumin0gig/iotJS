export default class Component{
  target;
  props;
  state;
  constructor(target, props){
    this.target=target;
    this.props=props;
    
    this.setup(); 
    this.render();
    this.setEvent();
    //함수 실행
  }
  render(){
    this.target.innerHTML= this.template();
    //target 위치에 template를 작성한다.
    this.mounted();
  }
  
  setState(newState){
    this.state= {...this.state, ...newState};
    this.render();
  }

  mounted(){} // render 이후에, App에서, TodoHeader의 target과 props 지정
  setup(){} // App에서, 초기에 입력되어있을 list 출력
  template(){return ""} //innerHTML에 출력될 구문
  setEvent(){} // ToDoHeader에서, 이벤트 출력

}