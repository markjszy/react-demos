import React from 'react';

export default class EmployeeCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(`You clicked the entry for ${this.props.firstName} ${this.props.lastName} (${this.props.id})`);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>First name: {this.props.firstName}</p>
                <p>Last name: {this.props.lastName}</p>
                <p>Title: {this.props.title}</p>
                <p>Department: {this.props.department}</p>
            </div>
        );
    }   
}