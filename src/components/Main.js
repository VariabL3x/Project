import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom';
import Homepage from '../pages/Homepage'
import Register from '../pages/RegisterPage'
import Login from '../pages/LoginPage'

class Main extends React.Component{
    render(){
        return(
            <Router>
        <Route exact strict path = "/"
            component = {props =>{
            return(
                <Homepage {...props}/>
            )
            }}
        />
        <Route exact strict path = "/register"
            component = {props =>{
            return(
                <Register {...props}/>
            )
            }}
        />
        <Route exact strict path = "/login"
            component = {props =>{
            return(
                <Login {...props} />
            )
            }}
        />
        <Route exact strict path = "/user/:username"
            component = {props =>{
                return(
                    <Homepage {...props}/>
                )
            }}
        />
    </Router>
        )
    }
}
    
    // <Router>
    //     <Route exact strict path = "/"
    //         component = {props =>{
    //         return(
    //             <Homepage {...props}/>
    //         )
    //         }}
    //     />
    //     <Route exact strict path = "/register"
    //         component = {props =>{
    //         return(
    //             <Register {...props}/>
    //         )
    //         }}
    //     />
    //     <Route exact strict path = "/login"
    //         component = {props =>{
    //         return(
    //             <Login {...props}/>
    //         )
    //         }}
    //     />
    // </Router>
    


export default Main

