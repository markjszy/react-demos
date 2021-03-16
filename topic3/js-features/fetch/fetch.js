const HOST_STEM = 'https://crudcrud.com/api';
const API_ID = '62a39a9391c34154ad2e102b673ea9f7';
const EMPLOYEES_ENDPOINT = `${HOST_STEM}/${API_ID}/employees`;


// simple get request, assuming all goes well
fetch(EMPLOYEES_ENDPOINT)
    .then(response => response.json())
    .then(data => console.log(data));

// writing the above with async/await
async function getData() {
    let response = await fetch(EMPLOYEES_ENDPOINT);
    let data = await response.json();
    console.log(data);
}

getData();

// error handling
async function getDataImproved() {
    let response;
    try {
        response = await fetch(EMPLOYEES_ENDPOINT);
    } catch(err) {
        throw new Error('Error obtaining response...');
    }
    if (!response.ok) {
        throw new Error('Response not OK...');
    }

    let data = await response.json();
    console.log(data);
}

getDataImproved().catch(err => {console.log(err)});

// example of a POST request with fetch
async function postNewEmployee() {
    let response = await fetch(EMPLOYEES_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({firstName: 'John', lastName: 'Smith', title: 'Developer', department: 'R&D'})
    });

    return response.json();
}
postNewEmployee();