export default class Component {
  target;
  props;
  state;
  constructor(target, props){
    this.target=target;
    this.props=props;
    this.setup();
    this.setEvent();
    this.render();
  }
  setup(){}
  template(){return "";}
  mounted(){}
  setEvent(){}
  render(){
    this.target.innerHTML= this.template()
    this.mounted();;
  }
  setState(newState){
    this.state= {...this.state, ...newState};
    this.render();
  }
}