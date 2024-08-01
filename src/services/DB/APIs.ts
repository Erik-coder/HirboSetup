import fetch from 'node-fetch';

/**
 * GET APIs information to the API.
 * @returns {Promise<void>} - A promise that resolves when the API call completes.
 */
export function getAPIsDef() {
    const apiUrl = 'https://hirbo.arvispace.com/services/ser_get_HCM_APIs.php';
    const username = 'hirbo';
    const password = 'hirbo2024';
    const credentials = Buffer.from(`${username}:${password}`).toString('base64'); // Encoding for Node.js

    const options = {
        method: 'GET', // or 'POST', 'PUT', 'DELETE', etc.
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${credentials}`
        }
    };

    // Making the API call using fetch and returning a promise
    return fetch(apiUrl, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // or response.text() if you expect plain text
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle any errors that occur
        });
}