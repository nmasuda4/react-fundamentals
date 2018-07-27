

let params =  '?api-key=65af7d9ddfdd4b308c5a5a27a844996b'

fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json' + params + '&q=rainbow')
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);
  });
