import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class EmployeeCard extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.deleteEmployee(this.props._id);
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.firstName} {this.props.lastName}</h5>
                    <p className="card-text">{this.props.title} in {this.props.department}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger" onClick={this.handleClick}>Delete</button>
                </div>
            </div>  
        );
    }
}