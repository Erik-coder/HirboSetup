import fetch from 'node-fetch';

/**
 * GET APIs information to the API.
 * @returns {Promise<void>} - A promise that resolves when the API call completes.
 */

let arrayResponse = [];

export function getQuestions() {
    const apiUrl = 'https://hirbo.arvispace.com/services/ser_getQuestions.php';
    const username = 'hirbo';
    const password = 'hirbo2024';
    const credentials = Buffer.from(`${username}:${password}`).toString('base64'); // Encoding for Node.js

    const options = {
        method: 'POST', // or 'POST', 'PUT', 'DELETE', etc.
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${credentials}`
        }
    };

    return fetch(apiUrl, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success: ', data);
            arrayResponse = data;
            return arrayResponse;
            
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle any errors that occur
        });

        
}









