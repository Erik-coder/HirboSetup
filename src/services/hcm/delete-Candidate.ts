import fetch from 'node-fetch';

/**
 * Posts candidate information to the API.
 * @param {string} numeroCandidato - The candidate's email.
 * @returns {Promise<void>} - A promise that resolves when the API call completes.
 */
export function deleteCandidate(numeroCandidato) {
    const apiUrl = `https://eioq-dev10.fa.us2.oraclecloud.com/hcmRestApi/resources/11.13.18.05/recruitingCandidates/${numeroCandidato}`;
    const username = 'DTI_JMARIN';
    const password = 'DTI@2024';
    const credentials = Buffer.from(`${username}:${password}`).toString('base64');


    const options = {
        method: 'DELETE', // or 'POST', 'PUT', 'DELETE', etc.
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
            return response.json(); // or response.text() if you expect plain text
        })
        .then(data => {
            console.log('Success:', data);
            
            //console.log(data.CandidateNumber);
            //return data.CandidateNumber;
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle any errors that occur
        });
}