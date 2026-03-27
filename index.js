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


  

app.get('/', (req, res) => {
    res.render('del', { students });
});

app.post('/deleteUser/:id', (req, res) => {
    const { id } = req.params;

    students.splice(id, 1);

    res.redirect('/del');
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

