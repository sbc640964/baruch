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
  const main = document.getElementById('posts');

  let postsHtml = [];
  
  for(post of data){
    postsHtml.push(createPostInArcive( post ))
  }

  main.innerHTML = postsHtml.join('');

}


function createPostInArcive(post) { 
  return `<div class="post">
    <h3>${post.title}</h3>
    <p>${post.body}</p>
  </div>`  
}

function search(search) { 
  return data.filter(function(item){
    return item.body.includes(search);
  })
}