export default class Component{
  target;
  props;
  str;
  constructor(target,props){
    this.target=target;
    this.props=props;
    
    this.render();
  }
  render(){
    this.target.innerHTML= this.template();
    this.mounted();
  }

  setup(){}
  template(){return ""} // input, ul, btns 작성 
  setup(){} // li 작성
  mounted(){}
}