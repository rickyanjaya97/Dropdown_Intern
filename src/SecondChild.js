import React, { Component } from 'react';

class SecondChild extends Component {

    render() {
        console.log(this.props.value);
        return (
            <textarea value={this.props.value} onChange={this.props.handleChange} />
        );
    }
}

export default SecondChild;