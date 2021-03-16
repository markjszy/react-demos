const EMPLOYEES_ENDPOINT = 'https://crudcrud.com/api/62a39a9391c34154ad2e102b673ea9f7/employees';

class EmployeeService {
    getAll = async() => {
        try {
            const resp = await fetch(EMPLOYEES_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.error(`Problem fetching employees: ${e}`);
        }
    }

    update = async(employee) => {
        try {
            let updatedWithoutId = {
                firstName: employee.firstName,
                lastName: employee.lastName,
                title: employee.title,
                department: employee.department
            }
            const resp = await fetch(`${EMPLOYEES_ENDPOINT}/${employee._id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedWithoutId)
            });
            return resp;
        } catch(e) {
            console.error(`Problem updating employee: ${e}`);
        }
    }

    create = async(employee) => {
        try {
            const resp = await fetch(`${EMPLOYEES_ENDPOINT}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(employee)
            });
            return resp;
        } catch(e) {
            console.error(`Problem creating employee: ${e}`);
        }
    }

    delete = async(id) => {
        try {
            const resp = await fetch(`${EMPLOYEES_ENDPOINT}/${id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
            });
            return resp;
        } catch(e) {
            console.error(`Problem deleting employee:${e}`);
        }
    }
}

export const employeeService = new EmployeeService();