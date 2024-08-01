import fetch from 'node-fetch';
/**
*@param {string} mail,
*@param {string} lname,
*@param {string} fname, 
*@param {string} mname, 
*@param {string} plname,
@returns {Promise<void>}
*/ 
export function postCandidates(mail,lname,fname,mname,plname){

    const apiUrl = 'https://eioq-dev10.fa.us2.oraclecloud.com/hcmRestApi/resources/11.13.18.05/recruitingCandidates';
    const username = 'DTI_JMARIN';
    const password = 'DTI@2024';
    const credentials = Buffer.from(`${username}:${password}`).toString('base64'); // Encoding for Node.js

    const jsonData = {
        Email:mail,
        LastName:lname,
        FirstName:fname,
        MiddleNames:mname,
        PreviousLastName:plname
      };


    const options = {
      method: 'POST', // or 'POST', 'PUT', 'DELETE', etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${credentials}`
      },
      body: JSON.stringify(jsonData)
    };

  // Making the API call using fetch
  fetch(apiUrl, options) 
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // or response.text() if you expect plain text
    })
    .then(data => {
      console.log('Success:', data);
      console.log(data.CandidateNumber);
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle any errors that occur
    });

  }