// https://m.split-airport.hr/odlasci.php?lang=en

// import https from 'node:https';
// const req = https.request({
//   host: 'https://www.split-airport.hr/index.php?lang=en',
//   // port: 8080,
//   method: 'GET',
// }, (res) => {
//   // res.resume();
//   res.on('end', () => {
//     if (!res.complete)
//       console.error(
//         'The connection was terminated while the message was still being sent', error);
//     console.log("error")
//   });
// });

import axios from 'axios';
//const axios = require('axios'); // legacy way

// Make a request for a user with a given ID
axios.get('https://m.split-airport.hr/odlasci.php?lang=en')
  .then(function (response) {
    // handle success
    console.log(response);
    // const parser = new DOMParser();
    // const html = parser.parseFromString(response)
    // console.log(html)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

