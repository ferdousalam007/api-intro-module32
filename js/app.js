//without function
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
//   .then(json => console.log(json));


//single function
  function loadData(){
      fetch ('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data=> console.log(data));
  }

//function calling into function
function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(getUser=> user(getUser) );
}

function user(dataUser){
    console.log(dataUser);
}