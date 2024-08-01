import fetch from 'node-fetch';

/**
 * Posts candidate information to the API.
 * @param {string} id - The candidate's email.
 * @param {string} numberC - The candidate's last name.

 * @returns {Promise<void>} - A promise that resolves when the API call completes.
 */
export function createCandidateDB(fname,mname,lname,plname,numberC) {
    const apiUrl = 'https://hirbo.arvispace.com/services/ser_createCandidates.php';
    const username = 'DTI_JMARIN';
    const password = 'DTI@2024';
    const credentials = Buffer.from(`${username}:${password}`).toString('base64'); // Encoding for Node.js

    const jsonData = {
        Nombre: fname,
        SegundoNombre: mname,
        ApellidoPaterno: lname,
        AppelidoMaterno: plname,
        NumeroCandidato: numberC
    };

    const options = {
        method: 'POST', // or 'POST', 'PUT', 'DELETE', etc.
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${credentials}`
        },
        body: JSON.stringify(jsonData)
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
            console.log(data.CandidateNumber);
            return data.CandidateNumber;
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle any errors that occur
        });
}