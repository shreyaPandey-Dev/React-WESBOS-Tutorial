import React, { Component } from 'react'
import {formatPrice} from '../../helpers'

export default class Fish extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
handleClick = () =>{
    this.props.addtoOrder(this.props.index)
}

    render() { 
        // console.log('FISH----------',this.props.details)
        // console.log('FISH-----this.props["details"]-----',this.props["details"])
        if(this.props["details"]) {
            const isAvailable = this.props.details.status === 'available'
            return (  
                <li className="menu-fish">  
                 <img src={this.props.details.image} alt={this.props.details.name}></img>
                 <h3 className="fish-name">
                     {this.props.details.name}
                 <span className="price">{formatPrice(this.props.details.price)}</span>
                 </h3>
                 <p>
                     {this.props.details.desc}
                 </p>
                 <button 
                 disabled={!isAvailable}
                 onClick={this.handleClick}
                 >
                     {isAvailable ? 'Add to Cart' : 'Sold Out'}
                     </button>
               </li>
            )
        } else {
            return true;
        }
       
    }
}
 
