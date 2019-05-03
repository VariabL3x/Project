import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class RegisterForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            username:"",
            email:"",
            password:"",
            confirm_password:"",
            signedUp:false
        }
    }
    handleChange = (e) =>{
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]:value
        })
    }

    handleSubmit = (e) => {
        if(this.state.password === this.state.confirm_password){
            e.preventDefault()
            let formData = new FormData()
            formData.set('username',this.state.username)
            formData.set('email',this.state.email)
            formData.set('password',this.state.password)
            axios({
                method:"POST",
                url:"https://fathomless-gorge-77532.herokuapp.com/api/v1/users/new",
                data:formData,
                config: { headers : {'Content-Type' : 'multipart/form-data'}}
            }).then((result)=>{
                if(result.data.status){
                    this.setState({signedUp:true})
                }
            })
        }
    }
    render(){
        if (this.state.signedUp) {
            return (
                <Redirect to="/login"/>
            )
        }
        return(
            <form onSubmit={this.handleSubmit}className="register-form-box">
                <label>Username</label>
                <input type="text" name="username" onChange={this.handleChange}/>

                <label>Email</label>
                <input type="email" name="email" onChange={this.handleChange}/>

                <label>Password</label>
                <input type="password" name="password" onChange={this.handleChange}/>

                <label>Confirm Password</label>
                <input type="password" name="confirm_password" onChange={this.handleChange}/>

                <input type="submit" value="Register"/>

                <a href="/login">Already have an account?</a>
            </form>
        )
    }
}