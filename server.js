const express = require('express');
const mysql = require('mysql2');
const fs = require('fs');


const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'rootr00t!',
    database: 'employee-db'
  },
  console.log(`Connected to the employee_db database.`)
);

