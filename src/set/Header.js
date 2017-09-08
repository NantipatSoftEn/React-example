import React, { Component } from 'react';

class Header extends Component
{
    constructor()
    {
        super();
        this.state={name:"Nantipat"};
        this.state={count:0};
    }
    render(){
        setTimeout(()=>this.setState({name:"React"}),2000);
        setInterval(()=>this.setState({title:this.state.count+1}),100 );

        return (
            <div>
                <h1>Wait  2 sec Show mes</h1>
                <h2>{this.state.name }</h2>
                <h2>{this.state.count }</h2>

            </div>
        );
    }
}
export default Header
