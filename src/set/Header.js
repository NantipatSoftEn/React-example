import React, { Component } from 'react';

class Header extends Component
{
    constructor()
    {
        super();
        this.state={
            data:[],
            message:"Like",
            type:""
        };
    
          this.changMessage = this.changMessage.bind(this);

    }

    changMessage()
    {
        this.setState({message:"UnLike"});
    }
    render(){


        return (
            <div>
                <h1>Wait  2 sec Show mes</h1>
                <h2>{this.state.name }</h2>
                <h1>{this.state.message}</h1>
                <button onClick = {this.changMessage}>{this.state.message}</button>
            </div>
        );
    }
}
export default Header
