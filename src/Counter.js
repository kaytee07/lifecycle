import React,{Component} from "react";
import "./App.css"


class Counter extends Component {
    constructor(props){
        super(props)
  
        this.state = {
          counter: 0,
          initialize:true
        }
      
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
  
    errorComponent(){return <div>{this.props.ignore}</div>}
    increment(){
      this.setState({
        ...this.state,
        counter: this.state.counter + 1
      })
    }  
  
    decrement(){
      this.setState({
        ...this.state,
        counter: this.state.counter  - 1
      })
    }  
  
    componentDidMount(){
        setTimeout(()=> {
            this.setState({
                ...this.setState,
                initialize:false
            })
        }, 1000)
        console.log("mount")
      }

      componentDidUpdate(prevProps, prevState, snapshot){
        console.log("bounce");
      }


      shouldComponentUpdate(nextProps, nextState){
        if(nextProps.ignoreProp && 
            this.props.ignoreProp !== nextProps.ignoreProp)
            {
            console.log("Hypocrisy")
            return false;
            }
        return true
    }
    
    static getDerivedStateFromProps(props, state){
        if(props.seed && state.seed !== props.seed)
        {
            return {
                seed:props.seed,
                ignoreProp:props.seed
            }
        }
        return null
    }

  
    render() {
        console.log("render");
        if(this.state.initialize)
            return <div>initializing...</div>

        if(this.state.error)
        {
            return <div>we encountered an error: {this.state.error.message}</div>
        }

        return (
          <div className='App'>
            <button onClick={this.increment}>Increase</button>
            <button onClick={this.decrement}>decrease</button>
            <div className='Counter'>
            Counter: {this.state.counter}
            </div>
            {this.props.showComponentError ? <this.errorComponent/> : null}
          </div>
        )
    }
    
    
    componentWillUnmount(){
        console.log("will unmount");
    }

    componentDidCatch(error, info){
        console.log('Component did catch');
        this.setState({error, info})
    }
  
  
}

export default Counter