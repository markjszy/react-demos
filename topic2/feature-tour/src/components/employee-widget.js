import React from 'react';
import EmployeeCard from './employee-card';
import EmployeeEntryForm from './employee-entry-form';

const mockEmployeeData = [
    {
        id: 1234,
        firstName: 'Anna',
        lastName: 'Watson',
        title: 'Lead Engineer',
        department: 'Content Solutions'
    },
    {
        id: 8734,
        firstName: 'Bill',
        lastName: 'Finnegan',
        title: 'Regional Sales Director',
        department: 'Sales'
    },
    {
        id: 2331,
        firstName: 'Lisa',
        lastName: 'Flynn',
        title: 'Business Analyst',
        department: 'Product Development'
    },
    {
        id: 5345,
        firstName: 'John',
        lastName: 'Ortiz',
        title: 'Chief Counsel',
        department: 'Legal'
    },
]


class EmployeeWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }

        this.addNewEmployee = this.addNewEmployee.bind(this);
    }

    componentDidMount() {
        // pretend we are making a network request for employee data, 
        // then use the results to update state
        setTimeout(() => {
            this.setState({ employees: mockEmployeeData })
        }, 2000);
    }

    addNewEmployee(employee) {
        const employees = this.state.employees.slice();
        // just generate a simple id for additions...
        employee.id = employees.length;
        this.setState({ employees: [...employees, employee]});
    }

    render() {
        const employeeCards = this.state.employees.map(employee => <EmployeeCard {...employee} key={employee.id} />)
        return (
            <div>
                <h1>Employee Widget</h1>
                <EmployeeEntryForm onSubmit={this.addNewEmployee} />
                <div>
                    {employeeCards}
                </div>
            </div>
        );
    }
}

export default EmployeeWidget;