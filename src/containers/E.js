import React from 'react'
import { Container,Row ,Col,Input} from 'reactstrap'
import axios from 'axios'

class E extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            blog_title:this.props.title,
            blog_desc:"",
            blog_id:""
        }
    }
    componentDidMount(){
        axios.get("http://localhost:5000/api/v1/blogs/"+this.state.blog_title)
        .then(result=>{
            this.setState({
                blog_desc:result.data.data.desc,
                blog_id:result.data.data.id,
                
            })
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('blog_id',this.state.blog_id)
        formData.append('blog_title',this.state.blog_title)
        formData.append('blog_desc',this.state.blog_desc)

        axios.post("http://localhost:5000/api/v1/blogs/edit", formData, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'multipart/form-data'
            }
        }).then(result=>{
            if(result.data.status){
                alert("succesfully edited")
            }
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() { 
        return ( 
            <>
            <Container>
                <Row>
                    <Col lg={10} xs={12}className="d-flex justify-content-center align-item-center">
                        <div className="post-form shadow">
                            <legend>Edit Post</legend>
                            <hr/>
                            <form onSubmit={this.handleSubmit}>
                                <legend className="d-flex">Blog title</legend>
                                <Input type="text" className="title" name="blog_title" onChange={this.handleChange} value={this.state.blog_title}/>
                                
                                <legend className="d-flex">Description</legend>
                                <Input type="textarea" name="blog_desc" className="textarea" onChange={this.handleChange} value={this.state.blog_desc}/>

                                <input type="submit" value="Edit" className="d-flex btn btn-success"/>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            </>
        );
    }
}

export default E;