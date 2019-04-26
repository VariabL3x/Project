import React from 'react'
import { Layout,Header,Navigation,Content } from 'react-mdl'
export default class NavBar extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isLogin:false
        }
    }

    render(){
        return this.state.isLogin?( 
            <div style={{height: '80px', position: 'relative'}}>
                <Layout fixedHeader>
                    <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>is log in</strong></span>}>
                        <Navigation>
                            <a href="/"><strong>Home</strong></a>
                            <a href="/"><strong>Post</strong></a>
                            <a href="/"><strong>Account</strong></a>
                            <a href="/"><strong>Logout</strong></a>
                        </Navigation>
                    </Header>
                    <Content />
                </Layout>
            </div>
        ) : <div style={{height: '100vh', position: 'relative'}}>
                <Layout fixedHeader>
                    <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>not logged in</strong></span>}>
                        <Navigation>
                            <a href="/"><strong>Home</strong></a>
                            <a href="/login"><strong>Login</strong></a>
                            <a href="/register"><strong>Register</strong></a>
                        </Navigation>
                    </Header>
                    <Content />
                </Layout>
            </div>
        
    }
}

