 //컴포넌트 클래스 선언
 export default class Component{
  //필드
  target;
  state;

  //생성자
  constructor(target){
    this.target= target;
    this.setup();
    this.render();
  }

  //메소드
  setup(){}
  // 화면 구현 return
  template(){
    return "";
  }
  setEvent(){}

  // render: 화면에 작성 & 이벤트 연결
  render(){
    this.target.innerHTML= this.template();
    this.setEvent();
  }

  // state 값 업데이트 용도
  setState(newState){
    this.state= {...this.state, ...newState}
    this.render();
  }
}
