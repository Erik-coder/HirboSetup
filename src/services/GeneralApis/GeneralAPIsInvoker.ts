import fetch from 'node-fetch';

export function apiInvoker(baseURL, endpoint, method, headers, body) {
    // Construir la URL completa
    const url = `${baseURL}${endpoint}`;
    
    // Configurar las opciones de la solicitud
    const username = 'DTI_JMARIN';
    const password = 'DTI@2024';
    const credentials = Buffer.from(`${username}:${password}`).toString('base64'); // Encoding for Node.js

    const jsonData = body;

    const options = {
        method: method, // or 'POST', 'PUT', 'DELETE', etc.
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${credentials}`
        },
        body: JSON.stringify(jsonData)
    };

    // Making the API call using fetch and returning a promise
    return fetch(url, options)
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