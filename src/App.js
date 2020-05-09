import React, { Component } from 'react';
import './App.css';
import sampleFishes from './sample-fishes'
import Header from './components/Header/Header'
import Inventory from './components/Inventory/Inventory'
import Order from './components/Order/Order'
import Fish from './components/Fish/Fish'
import base from './base'


export default class App extends Component{

state = {
  fishes :{},
  order: {}
}

// application is loaded 
  componentDidMount(){
    console.log('mounted')
    const {id} = this.props.match.params;
    console.log("params.storeId",id, this.props.match)
    // refrence to piece of data in the database
    this.ref = base.syncState(`${id}/fishes`,
    {
      context: this,
      state : "fishes"
    });
    console.log("REF--",this.ref)
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  render(){
    return (
      <div className="App">
        <header className="catch-of-the-day">
          <div className="menu">
              <Header tagline="Fresh daily fishes"/>
           <ul className="fishes">
             {/* this will give array style for all the object and It will loop over fishes and grab the keys for each object */}
                {Object.keys(this.state.fishes)
                .map(keys => 
                  <Fish
                  key={keys} 
                  index={keys}
                  details={this.state.fishes[keys]} 
                  addtoOrder={this.addToOrder}
                  />
                  )}
           <Fish></Fish>
           </ul>
          </div>
          <Order 
          fishes={this.state.fishes}
          order={this.state.order}
          ></Order>
          <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}></Inventory>
        </header>
        
      </div>
    );
  }

  addFish = (fish) => {
    console.log('adding a fish',fish)
    // take a copy using spread
    const fishes = {...this.state.fishes}
    // add a new fish to the fishes
    fishes[`fish${Date.now()}`] = fish;
    console.log(fish)
    // set new fishes obj to state
    this.setState(
      {
        // fishes:fishes
        fishes
      }
    )
  }

  loadSampleFishes = () => {
    console.log("loading sample fishes")
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder = (key) => {
    // copy of state
    const order ={...this.state.order};
    // add to ordr or uodate the number
    order[key] = order[key] + 1 || 1;
    // call setstate to update our state obj
    this.setState({
      order
    })
  }
}