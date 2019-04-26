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
            <Form className="register-form-box shadow">
                <FormGroup>
                <Label>name</Label>
                <Input/>
                </FormGroup>
                <FormGroup>
                <Label>name</Label>
                <Input/>
                </FormGroup>
                <FormGroup>
                <Label>name</Label>
                <Input/>
                </FormGroup>
                <FormGroup>
                <Label>name</Label>
                <Input/>
                </FormGroup>

                
            </Form>
        )
    }
}