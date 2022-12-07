import Component from "./component.js";
import Divs from "./divs.js";
export default class Lists extends Component{

template(){
  const {lists}= this.props;
  return`
  ${lists.map(li=>`<li>${li.content}</li`)}
  `
}



}