import React, { Component } from 'react'
import { getFunName } from '../../helpers'


export default class Storepicker extends Component {

 
  myInput = React.createRef();
  constructor(){
    super();
   
    this.goToStore = this.goToStore.bind(this);
  }

   goToStore = (event) => {
    event.preventDefault();
    console.log('goToStore',this.myInput.current.defaultValue)
    const storeName = this.myInput.current.defaultValue;
    //  navigating you can pass props to the history object 
    this.props.history.push(`/store/${storeName}`) 
  }

  render(){
      return(
        <form className="store-selector" onSubmit={this.goToStore}>
        <input type="text" placeholder="Store name" defaultValue={getFunName()} ref={this.myInput} required />
        <button type="submit">Visit Store!</button>
        </form>
      )
  }

  componentDidMount(){
    console.log('mounted---------',this)
  }

}