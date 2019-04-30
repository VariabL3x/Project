import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class LoginForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            username:"",
            password:'',
            redirect:false,
            current_user:""
        }
    }

    handleChange = (e) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]:value
        })

        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.set("username",this.state.username)
        formData.set("password",this.state.password)

        axios({
            method:"POST",
            url:"http://localhost:5000/api/v1/users/login",
            data:formData,
            config: { headers:{'Content-Type': 'multipart/form-data'}}
        }).then(result=>{
            if(result.data.status){
                sessionStorage.setItem('id', result.data.data.id)
                sessionStorage.setItem('username',result.data.data.username)
                this.setState({
                    redirect:true,
                    current_user:sessionStorage.getItem('username')
                })
                
                
                
            }
        })
    }
    render(){
        if(this.state.redirect){
            return(
                <Redirect push to={"/user/"+this.state.current_user}/>
            )
        }
        return(
            <form className="login-form-box" onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" onChange={this.handleChange}/>

                <label>Password</label>
                <input type="password" name="password" onChange={this.handleChange}/>

                <input type="submit" value="Login"/>
                <a href="/register">Don't have an account ? Create one here</a>
            </form>
        )
    }
}