const express = require("express");

const app = express();
app.set('view engine', 'ejs')
const dotenv= require('dotenv')
dotenv.config()

console.log("Yes");
console.log("are you sure")




const students = [
  {
    name: "Clement",
    age: 24,
    course: "Computer Science",
    level: "400",
    score: 85
  },
  {
    name: "John",
    age: 22,
    course: "Engineering",
    level: "300",
    score: 78
  },
  {
    name: "Mary",
    age: 23,
    course: "Medicine",
    level: "500",
    score: 92
  },
  {
    name: "David",
    age: 21,
    course: "Business Administration",
    level: "200",
    score: 74
  }
];


let user= [{
    "userId": 1,
    
    "id": 1,
    "title": "Ligend of the Giver",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "We aren't losers",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "Best Software",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }];

  

app.get('/', (req, res) => {
    res.render('del', { students });
});

app.post('/deleteUser/:id', (req, res) => {
    const { id } = req.params;

    students.splice(id, 1);

    // res.redirect('/del'); // ✅ no data here
});

app.get('/del', (req, res) => {
    res.render('del', { students });
});


// start server
app.listen(process.env.PORT, (err) => {
if (err) {
    console.log("server cant run");
} else{
   console.log("Server is running on http://localhost:5009");
}
});