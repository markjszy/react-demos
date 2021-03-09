import React from 'react';

// class-style definition equivalent to functional component
/*
class Greeting extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}!</h1>
        );
    }
}
*/

// React functional component: see https://reactjs.org/docs/components-and-props.html#function-and-class-components
function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>
}

export default Greeting;