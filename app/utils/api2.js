var axios = require('axios');

module.exports = {

   fetchStarwars: function(num) {
      return axios.get('http https://swapi.co/api/starships/{num}')
         .then(function(response) {
            console.log(response);
         })
   }

}
