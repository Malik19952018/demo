const express = require("express");
const app = express();
const users = require("./users");
const klinac=require("./klinac")
const { Client } = require('pg')
const client = new Client()

client.connect()

client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
})
function logger(req, res, next) {
	console.log("Path", req.path);
	console.log("Method", req.method);
	next();
}

app.use(logger);

app.get("/", function(req, res) {
return res.json({
	message: "Hello world"
});
});

app.use("/users", users);
app.use("/klinac", klinacnpm);


app.get("/route", function(req, res) {
return res.status(412).send({poruka: "Poruka"});
});

app.listen(3000, () => {
	console.log("server started on port 3000");
});