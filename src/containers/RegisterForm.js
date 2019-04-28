import React from 'react'
import axios from 'axios'

export default class RegisterForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            username:"",
            email:"",
            password:"",
            confirm_password:""
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
            let formData = new FormData()
            formData.set('email',this.state.email)
            formData.set('username',this.state.username)
            formData.set('password',this.state.password)
            axios({
                method:"POST",
                url:"http://localhost:5000/api/v1/users/",
                data:formData,
                config: { headers : {'Content-Type' : 'multipart/form-data'}}
            }).then((result)=>{
                console.log(result)
            })
        }
    }
    render(){
        return(
            <form className="register-form-box">
                <label>Username</label>
                <input type="text" name="useranme" onChange={this.handleChange}/>

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