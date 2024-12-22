const {response} = require("express");

fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name : 'Tes add data',
        email : 'tesadddata@example.com',
        phone : '081234567890'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))