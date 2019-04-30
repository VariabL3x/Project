import React from 'react'
import { Container , Row , Col } from 'reactstrap'
import axios from 'axios'

export default class Homepage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            blogs:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:5000/api/v1/blogs/")
        .then(result=>{
            this.setState({
                blogs:result.data.data
            })
        })
    }
    
    render(){
        const { blogs } = this.state
        return(
            <div style={{height:'100vh',margin:'auto'}}>
                <Container>
                    <Row>
                        {blogs.map(blog=>
                            <Col lg={9} className="d-flex justify-content-center align-items-center" key={blog.id}>
                                <div className="blog-post shadow-lg">
                                    <h4>{blog.parent_user}</h4>
                                    <h2>{blog.title}</h2>
                                    <p>{blog.desc}</p>
                                </div>
                            </Col>
                            )}
                        {/* <Col lg={3} className="d-flex">
                            <div className="aside shadow-lg">
                                <h4>Today's weather</h4>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </div>
        )
    }
}