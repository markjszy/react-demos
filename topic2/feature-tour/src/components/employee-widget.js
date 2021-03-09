import React from 'react';
import EmployeeCard from './employee-card';

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
    }

    componentDidMount() {
        // pretend we are making a network request for employee data, 
        // then use the results to update state
        setTimeout(() => {
            this.setState({ employees: mockEmployeeData })
        }, 2000);
    }

    render() {
        const employeeCards = this.state.employees.map(employee => <EmployeeCard {...employee} key={employee.id} />)
        return (
            <div>
                {employeeCards}
            </div>
        );
    }
}

export default EmployeeWidget;