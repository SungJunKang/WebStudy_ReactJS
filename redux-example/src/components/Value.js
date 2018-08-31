import React, { Component } from 'react';

class Value extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        );
    }
}

Value.defaultProps = {
    number: -1
};

export default Value;