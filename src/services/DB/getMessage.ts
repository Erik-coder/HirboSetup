import fetch from 'node-fetch';

/**
 * Posts candidate information to the API.
 * @returns {Promise<void>} - A promise that resolves when the API call completes.
 */

export function getMessage(Keyword) {
    const apiUrl = `https://hirbo.arvispace.com/services/Back/Rutas.php?Hirbo`;
    const jsonData = {
        message: Keyword//,
        //series:series
    };
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            ,'Authorization': 'none'
        },
        body: JSON.stringify(jsonData)
    };


    
    

    return fetch(apiUrl, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            //console.log('DB_RESPONSE:' ,data.response);
            return data.response;
        })  
        .catch(error => {
            console.error('Error:', error);
            // Handle any errors that occur
        });
    }









