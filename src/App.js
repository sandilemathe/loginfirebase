
import fire from './config/fire';
import './App.css';
import LoginRegister from './components/LoginRegister';
import Home from './components/Home';
import React, {Component} from 'react';

class App extends Component {

  constructor(){
    super();
    this.state = {
      user: null
    }

  componentDidMount(){
    this.authlListener();
  }  

  }

  authlListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });

    render(){
      return(
        <div>
          this.state.user ? (<home />) : (<LoginRegister />)
        </div>
      );
    }
  
  }

}

export default App;
