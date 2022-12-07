export default class Component {
  target;
  props;
  state; //관리할 데이터
  constructor(target,props){
    this.target=target;
    this.props=props;
    this.setup();
    this.render();
    this.setEvent();
  }  
  template(){
    return ""
  }
  render(){
    this.target.innerHTML = this.template();
    this.mounted();
  }
  setState(newState){
    this.state= { ...this.state, ...newState};
    this.render();
  }

  setup(){};
  mounted(){};
  setEvent(){};
}