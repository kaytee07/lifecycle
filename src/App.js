import React,{Component} from 'react';
import Counter from './Counter';
import './App.css';

class App extends Component{
    constructor(props){
      super(props)

      this.state = {
        mount:true,
        ignoreProp:0,
        seed:7,
        showErrorComponent:false
      }

      this.mountCounter = this.mountCounter.bind(this);
      this.unmountCOunter = this.unmountCOunter.bind(this);
      this.ignoreProp = this.ignoreProp.bind(this);
      this.setSeed = this.setSeed.bind(this);
  }

  mountCounter(){
    this.setState({
      ...this.state,
      mount:true
    })
  }

  unmountCOunter(){
    this.setState({
      ...this.state,
      mount:false
    })
  }

  ignoreProp(){
    this.setState({
      ...this.state,
      ignoreProp:1
    })
  }

  setSeed(){
    this.setState({
      ...this.state,
      seed: Math.floor(Math.random()*100) + 1
    })
  }

  toggleError(){
    this.setState({
      ...this.state,
      showErrorComponent:true
    })
  }

  render() {
      return (
        <div className='App'>
          <button onClick={this.mountCounter} disabled={this.state.mount}>mount</button>
          <button onClick={this.unmountCOunter} disabled={!this.state.mount}>unmount</button>
          <button onClick={this.ignoreProp}>Ignore Prop</button>
          <button onClick={this.setSeed}>set Seed</button>
          {this.state.mount ?  
          <Counter 
          ignoreProp={this.state.ignoreProp}
          seed={this.state.seed}
          showErrorComponent = {this.state.showErrorComponent}
          /> 
          : null}
         
        </div>
      )
  }
}

export default App;
