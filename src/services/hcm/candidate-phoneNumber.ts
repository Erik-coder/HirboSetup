import fetch from 'node-fetch';

/**
 * Posts candidate information to the API.
 * @param {string} pNumeroCandidato - The candidate's previous last name.
 * @param {string} pphoneNumber - The candidate's previous last name.
 * @returns {Promise<void>} - A promise that resolves when the API call completes.
 */
export function postCandidatesPhone(pNumeroCandidato,pphoneNumber) {
    const apiUrl = `https://eioq-dev10.fa.us2.oraclecloud.com/hcmRestApi/resources/11.13.18.05/recruitingCandidates/${pNumeroCandidato}/child/candidatePhones`;
    const username = 'DTI_JMARIN';
    const password = 'DTI@2024';
    const credentials = Buffer.from(`${username}:${password}`).toString('base64'); // Encoding for Node.js

    const jsonData = {
        PhoneNumber:pphoneNumber
        }

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
            
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle any errors that occur
        });
}