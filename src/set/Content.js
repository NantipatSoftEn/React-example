import React, { Component } from 'react';
class Content extends Component
{
    render()
    {
        const helloWorld = {
            text: 'Welcome to the Road to learn React'
        };
        return (
            <div>
                {helloWorld.text}
                <h1>Content</h1><p>{this.props.title}{this.props.name}</p>
            </div>


        );
    }
}
export default Content
