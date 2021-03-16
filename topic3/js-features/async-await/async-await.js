// Our Promise-returning demo function
function mockNetworkRequest(shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!shouldFail) {
                resolve('some data');
            } else {
                reject('bad request');
            }
        }, 1000);
    });
}

// without async-await
mockNetworkRequest().then(res => {
    console.log(`received this data: ${res}`);
});

// with async-await
async function makeRequest() {
    console.log('calling network request');
    const result = await mockNetworkRequest();
    console.log(`result in async-await function is ${result}`);
}

makeRequest();


// you can have multiple awaits in a function, and
// can use try-catch for errors
async function makeMultipleRequests() {
    console.log('making multiple requests...')
    const result1 = await mockNetworkRequest();
    console.log('back from first request in multiple requests');
    const result2 = await mockNetworkRequest();
    console.log('back from second request in multiple requests');
    try {
        const result3 = await mockNetworkRequest(true);
    } catch(err) {
        console.log(`there was an error: ${err}`);
    }
}
makeMultipleRequests();

