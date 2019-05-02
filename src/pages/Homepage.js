import React from 'react'
import { Container , Row , Col } from 'reactstrap'
import axios from 'axios'

export default class Homepage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            blogs:[],
            city:"",
            weatherdesc:"",
            temp:"",
            img_url:"",
            today_date:""

        }
    }
    componentDidMount(){
        Promise.all([
            axios.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?key=c0e57ee7cb6843b083672905190105&q=Kuala Lumpur&format=json&num_of_days=1"),
            axios.get("http://localhost:5000/api/v1/blogs/")
        ]).then(results=>{
            console.log(results[0].data.data.weather[0].date)
            this.setState({
                city:results[0].data.data.request[0].query,
                weatherdesc:results[0].data.data.current_condition[0].weatherDesc[0].value,
                temp:results[0].data.data.current_condition[0].temp_C,
                img_url:results[0].data.data.current_condition[0].weatherIconUrl[0].value,
                blogs:results[1].data.data,
                today_date:results[0].data.data.weather[0].date
            })
        })
    }
    
    render(){
        const { blogs } = this.state
        return(
            <div style={{height:'100vh',margin:'auto'}}>
                <Container>
                    <Row>
                    <Col lg={{offset:9,size:3}} className="d-flex">
                            <div className="aside shadow-lg">
                                <h4>{this.state.city}</h4>
                                <h4>{this.state.today_date}</h4>
                                <h4>Today's weather</h4>
                                <h4>{this.state.temp}C {this.state.weatherdesc}<img src={this.state.img_url} alt="#"></img></h4>
                            </div>
                        </Col>
                        {blogs.map(blog=>
                            <Col lg={9} className="d-flex justify-content-center align-items-center" key={blog.id}>
                                <div className="blog-post shadow">
                                    <h4>{blog.parent_user}</h4>
                                    <a href={`/blog/${blog.title}`}>{blog.title}</a>
                                    <p>{blog.desc}</p>
                                </div>
                            </Col>
                            )}
                            
                    </Row>
                    
                        
                    
                </Container>
            </div>
        )
    }
}