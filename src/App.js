import React , { Component }from 'react';
import NavBar from './containers/NavBar';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }
  render(){
    return(
      <>
      <NavBar/>
      </>
    )
  }
}

export default App;