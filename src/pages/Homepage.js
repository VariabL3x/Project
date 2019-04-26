import React from 'react'
import { Grid } from 'react-mdl'
export default class Homepage extends React.Component{
    render(){
        return(
            <div style={{height:'100vh',margin:'auto'}}>
                <Grid className="homepage-grid">
                    <h1>This is homepage</h1>
                </Grid>
            </div>
        )
    }
}