const mysql = require('mysql');
const {readFileSync} = require('fs');

const contents = readFileSync("db.txt",'utf-8')
const arr = contents.split(/\r?\n/)
const username = arr[0]
const password = arr[1]

const connection = mysql.createConnection(
    {
        host:'localhost',
        user:username,
        password:password,
        database:'smartcalendar'
    }
)

connection.connect((err)=>{
    if(err) throw err;
    console.log("Connected to MySQL server");
});

module.exports = connection;