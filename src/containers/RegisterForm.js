import React from 'react'
import { FormGroup,Input,Label,Form} from 'reactstrap'

export default class RegisterForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <form className="register-form-box">
                <label>Username</label>
                <input type="text"/>

                <label>Email</label>
                <input type="email"/>

                <label>Password</label>
                <input type="password"/>

                <label>Confirm Password</label>
                <input type="password"/>

                <input type="submit" value="Register"/>

                <a href="/login">Already have an account?</a>
            </form>
        )
    }
}