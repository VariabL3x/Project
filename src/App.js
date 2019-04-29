import React , { Component }from 'react';
import NavBar from './containers/NavBar';
import Main from './components/Main'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
    }
  }
  

  render(){

    return(
      <div className="background-app">
        <NavBar/>
        <Main/>
      </div>
    )
  }
}

export default App;