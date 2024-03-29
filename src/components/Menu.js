import React, {Component} from 'react';

class Menu extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
    const text = e.target.value;
    this.props.changeVideo(text)
  }

  render(){
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value='fast' /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    )
  }
} 

export default Menu; 