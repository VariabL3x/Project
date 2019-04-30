import React from 'react'
import { Layout,Header,Navigation } from 'react-mdl'
import '../App.css'
export default class NavBar extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            current_user:"",
            isLogin:false
        }
    }
    componentDidMount(){
        if(localStorage.getItem('id')){
            this.setState({
                current_user:localStorage.getItem('username'),
                isLogin:true
            })
        }
    }
    

    handleLogout = (e) =>{
        localStorage.clear()
    }
    render(){
        const userLinks = (
            <Header className="header-color" title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>is log in</strong></span>}>
                <Navigation>
                    <a href={`/user/${this.state.current_user}`}><strong>Home</strong></a>
                    <a href={`/user/${this.state.current_user}/post`}><strong>Post</strong></a>
                    <a href={`/user/${this.state.current_user}/account`}><strong>Account</strong></a>
                    <a href="/" onClick={this.handleLogout}><strong>Logout</strong></a>
                </Navigation>
            </Header>
        )

        const guestLinks = (
            <Header className="header-color" title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>not logged in</strong></span>}>
                <Navigation>
                    <a href="/"><strong>Home</strong></a>
                    <a href="/login"><strong>Login</strong></a>
                    <a href="/register"><strong>Register</strong></a>
                </Navigation>
            </Header>
        )
        return ( 
            <div style={{height: '80px', position: 'relative'}}>
                <Layout fixedHeader>
                    {this.state.isLogin? userLinks : guestLinks}
                </Layout>
            </div>
        ) 
        
    }
}

