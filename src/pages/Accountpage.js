import React from 'react'
import axios from 'axios'

export default class Account extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            username:"",
            password:"",
        }
    }
    componentDidMount(){
        this.getUserData()
    }

    getUserData(){
        let user_id = localStorage.getItem('id')
        axios.get("https://fathomless-gorge-77532.herokuapp.com/api/v1/users/"+user_id+"/show")
        .then(result=>{
            
            this.setState({
                username:result.data.data.username
            })
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value

        })
    }

    handleSubmit=(e)=> {
        e.preventDefault();
        let formData = new FormData()

        formData.append('user_id', localStorage.getItem('id'))
        formData.append('username', this.state.username)
        formData.append('password', this.state.password)

        axios.post("https://fathomless-gorge-77532.herokuapp.com/api/v1/users/edit", formData, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'multipart/form-data'
            }
        }).then(result => {
            console.log('The form was submitted with the following data:');
            console.log(result);
            this.getUserData()
        })
        
    }
    render(){
        return(
            <>
                <form onSubmit={this.handleSubmit} className="register-form-box">
                    <label>Username</label>
                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>

                    <label>Password</label>
                    <input type="password" name="password" onChange={this.handleChange}/>

                    <input type="submit" value="Change"/>

                    
                </form>
            </>
        )
    }
}