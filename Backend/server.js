
let express = require('express');
let app  = express();

let cors = require('cors');
let mysql = require('mysql');

app.use(cors())
app.use(express.json())
require('dotenv').config();

let conn = mysql.createConnection({
    host: `${process.env.DB_HOST}`,
    port: `${process.env.DB_PORT}`,
    user: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASS}`,
    database: `${process.env.DB_BASE}`,
});

app.listen(`${process.env.PORTS}`, function(){
  console.log("start");
});

conn.connect(function(error){
  if(error) console.log(error);
  else console.log(`connected on ${process.env.PORTS}`);
});

//recherche itinéraire
app.get('/itineraire/:ville', function(req, res){
  const { ville } = req.params
  conn.query(`SELECT city1, city2, city3, city4, image FROM itinerary WHERE city1 LIKE '%${ville}%' OR city2 LIKE '%${ville}%' OR city3 LIKE '%${ville}%' OR city4 LIKE '%${ville}%'`, function(error, rows, fields){
      if(error) console.log(error);
      else {
        console.log(rows);
        res.send(rows);
      }
  });
});
