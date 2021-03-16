import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class NewEmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            title: '',
            department: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.props.addNewEmployee(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstNameInput">First name</label>
                    <input name="firstName" type="text" className="form-control" id="firstNameInput" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <div className="form-group">
                        <label htmlFor="lastNameInput">Last name</label>
                        <input name="lastName" type="text" className="form-control" id="lastNameInput" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="titleInput">Title</label>
                    <input name="title" type="text" className="form-control" id="titleInput" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="departmentInput">Department</label>
                    <input name="department" type="text" className="form-control" id="departmentInput" onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Add Employee</button>
            </form>
        );
    }
}