//https://jsonplaceholder.typicode.com/posts

let data;

// Create an XMLHttpRequest object
const http = new XMLHttpRequest();
// Define a callback function
http.onload = function() {
  data = JSON.parse(this.response);
  createPage()
}

// Send a request
http.open("GET", "https://jsonplaceholder.typicode.com/posts");
http.send();


function createPage() { 
  console.log(data[0].title)
}

function search(search) { 
  return data.filter(function(item){
    return item.body.includes(search);
  })
}