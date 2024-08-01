import fetch from 'node-fetch';

/**
 * Posts candidate information to the API.
 * @param {string} pPais - The candidate's email.
 * @param {string} pMunicipio - The candidate's last name.
 * @param {string} pEstado - The candidate's first name.
 * @param {string} HCM_CP - The candidate's middle name.
 * @param {string} pNumeroInt - The candidate's previous last name.
 * @param {string} pHCMDireccion - The candidate's previous last name.
 * @param {string} pColonia - The candidate's previous last name.
 * @param {string} pNumeroCandidato - The candidate's previous last name.
 * @returns {Promise<void>} - A promise that resolves when the API call completes.
 */
export function postCandidatesAddress(pNumeroCandidato,pPais, pMunicipio, pEstado, HCM_CP, pNumeroInt, pHCMDireccion, pColonia) {
    const apiUrl = `https://eioq-dev10.fa.us2.oraclecloud.com/hcmRestApi/resources/11.13.18.05/recruitingCandidates/${pNumeroCandidato}/child/candidateAddress`;
    const username = 'DTI_JMARIN';
    const password = 'DTI@2024';
    const credentials = Buffer.from(`${username}:${password}`).toString('base64'); // Encoding for Node.js

    const jsonData = {
        Country:pPais,
        Region1:pMunicipio,
        Region2:pEstado,
        PostalCode:HCM_CP,
        AddressLine1:pNumeroInt,
        AddressLine2:pHCMDireccion,
        AddlAddressAttribute2:pColonia
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
            return data;
            
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle any errors that occur
        });
}