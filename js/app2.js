function userInfo(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(getData=> userData(getData));
}

function userData(data){
     const ul = document.getElementById('user-info');
     for(const element of data){
         const li = document.createElement('li');
         li.innerText = `user: ${element.name} and emai id is ${element.email}`;
         ul.appendChild(li);
     }
    
}