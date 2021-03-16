import React, {useState} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


/**
 * Contrast this with the edit form...in this, we demo use of functional components
 * and hooks (useState)
 */
export const NewEmployeeForm = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [title, setTitle] = useState('');
    const [department, setDepartment] = useState('');

    const handleSubmit = (event) => {
        props.addNewEmployee({firstName, lastName, title, department});
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="firstNameInput">First name</label>
                <input name="firstName" value={firstName} type="text" className="form-control" id="firstNameInput" 
                    onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="form-group">
                <div className="form-group">
                    <label htmlFor="lastNameInput">Last name</label>
                    <input name="lastName" value={lastName} type="text" className="form-control" id="lastNameInput" 
                    onChange={(e) => setLastName(e.target.value)} />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="titleInput">Title</label>
                <input name="title" type="text" value={title} className="form-control" id="titleInput" 
                    onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="departmentInput">Department</label>
                <input name="department" type="text" value={department} className="form-control" id="departmentInput" 
                    onChange={(e) => setDepartment(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Add Employee</button>
        </form>
    );
}