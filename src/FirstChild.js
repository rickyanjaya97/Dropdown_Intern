import React, { Component } from 'react';

class FirstChild extends Component {

    render() {
        console.log(this.props.value);
        return (
            <input type="text" value={this.props.value} onChange={this.props.handleChange} />
        );
    }
}

export default FirstChild;