import React from 'react'
import { Grid } from 'react-mdl'
import { Container , Row , Col } from 'reactstrap'

export default class Homepage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }
    render(){
        return(
            <div style={{height:'100vh',margin:'auto'}}>
                <Container>
                    <Row>
                        <Col lg={9} className="d-flex justify-content-center align-items-center">
                            <div className="blog-post shadow-lg">
                                <h4>My Name</h4>
                                <h2>Blog title</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </Col>
                        <Col lg={3} className="d-flex">
                            <div className="aside shadow-lg">
                                <h4>Today's weather</h4>
                            </div>
                        </Col>
                        <Col lg={9} className="d-flex justify-content-center align-items-center">
                            <div className="blog-post shadow-lg">
                                <h4>My Name</h4>
                                <h2>Blog title</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </Col>
                        <Col lg={3} className="d-flex">
                            <div className="aside shadow-lg">
                                <h4>Today's weather</h4>
                            </div>
                        </Col>
                        <Col lg={9} className="d-flex justify-content-center align-items-center">
                            <div className="blog-post shadow-lg">
                                <h4>My Name</h4>
                                <h2>Blog title</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </Col>
                        <Col lg={3} className="d-flex">
                            <div className="aside shadow-lg">
                                <h4>Today's weather</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}