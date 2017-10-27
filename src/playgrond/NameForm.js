import React, { Component } from 'react';
class NameForm extends Component
{
    constructor(props) {
            super(props);
        this.state = {name: 'กรุณากรอกชื่อ', facebook: 'กรุณากรอก link facebook'};

        this.handleChange = this.handleChange.bind(this);

    }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value});
  }
    render()
    {
        return (

            <label> Name:
                <input type="text" ref='name' name='name' placeholder={this.state.name} onChange={this.handleChange} />
                <input type="text" ref='name' name='facebook' placeholder={this.state.name} onChange={this.handleChange} />
            </label>
        );
    }
}
export default NameForm
