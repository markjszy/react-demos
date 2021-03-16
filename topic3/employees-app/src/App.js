import React from 'react';
import EmployeeCard from './components/employee-card';
import NewEmployeeForm from './components/new-employee-form';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const EMPLOYEES_ENDPOINT = 'https://crudcrud.com/api/62a39a9391c34154ad2e102b673ea9f7/employees';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    }

    this.addNewEmployee = this.addNewEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
  }

  render() {
    let employeeCards = this.state.employees.map(employee => {
      return <EmployeeCard {...employee} key={employee._id} 
        deleteEmployee={this.deleteEmployee} 
        updateEmployee={this.updateEmployee} />
    });
        
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Add Employee</h2>
            <NewEmployeeForm addNewEmployee={this.addNewEmployee} />
          </div>
          <div className="col">
            <h2>Employees</h2>
            {employeeCards}
          </div>
        </div>
      </div>
    );
  }

  _refreshData() {
    fetch(`${EMPLOYEES_ENDPOINT}`).then(resp => resp.json()).then(data => {
      this.setState({
        employees: data
      });
    });
  }

  componentDidMount() {
    this._refreshData();
  }

  addNewEmployee(employee) {
    return fetch(`${EMPLOYEES_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    }).then(() => {
      this._refreshData();
    });
  }

  updateEmployee(employee) {
    let updatedWithoutId = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      title: employee.title,
      department: employee.department
    }
    return fetch(`${EMPLOYEES_ENDPOINT}/${employee._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedWithoutId)
    }).then(() => {
      this._refreshData();
    });
  }

  deleteEmployee(id) {
    return fetch(`${EMPLOYEES_ENDPOINT}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      this._refreshData();
    });
  }
}
