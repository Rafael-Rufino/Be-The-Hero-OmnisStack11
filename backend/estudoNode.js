const express = require("express");

const app = express();
app.use(express.json());

const users = [];

// mostrar todos usuarios
app.get("/users", (req, res) => {
  return res.json({
    users,
  });
});

// Query Params [users?name=rafael&idade=25]
app.get("/users/", (req, res) => {
  const params = req.query;
  return res.json({ params });
});

// Route Params [users/1]
app.get("/users/:id", (req, res) => {
  const params = req.params;
  return res.json({ params });
});

// Request body [create user]
app.post("/users", (req, res) => {
  const { name, email, contact } = req.body;
  users.push({
    name,
    email,
    contact,
  });
  return res.json("success");
});

//servidor
const port = 3333;
app.listen(port, () => {
  console.log("Server is running 🚀");
});

/**
 * Tipos de parametros
 *
 * Query Params: parametros nomeados enviados na rota apos "?" (Filtros, paginação)

 * Route Params: parametros utilizandos para identificar recursos

 * Request body : Corpo da requisição, utilizando para criar ou alterar recursos
 */
/**
 * Banco de dados
 *
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL, MongoDB
 *
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where('users')
 */

/**criar migrations 
- yarn knex migrate:make create_ongs

** roda
- yarn knex migate:latest

** apagar
- yarn knex migate:rollback

** mostrar
- yarn knex migate:status
*/
