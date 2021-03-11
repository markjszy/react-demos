import React from 'react';

export default class EmployeeEntryForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            title: '',
            department: ''
        }

        this.submitForm = this.submitForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    resetForm() {
        this.setState({
            firstName:'',
            lastName: '',
            title: '',
            department: ''
        });
    }

    submitForm() {
        this.props.onSubmit(this.state);
        this.resetForm();
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <h2>New Employee Form</h2>
                <div>
                    <label htmlFor="firstNameInput">First name:</label>
                    <input name="firstName" type="text" id="firstNameInput" value={this.state.firstName} onChange={this.handleInputChange} />
                    <label htmlFor="lastNameInput">Last name:</label>
                    <input name="lastName" type="text" id="lastNameInput" value={this.state.lastName} onChange={this.handleInputChange} />
                    <label htmlFor="titleInput">Title:</label>
                    <input name="title" type="text" id="titleInput" value={this.state.title} onChange={this.handleInputChange} />
                    <label htmlFor="departmentInput">Department:</label>
                    <input name="department" type="text" id="departmentInput" value={this.state.department} onChange={this.handleInputChange} />
                    <button onClick={this.submitForm}>Enter New Employee</button>
                </div>
            </div>
        );
    }
}