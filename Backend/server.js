const chats = require("./Data/data");
const express = require("express");
const dotenv = require("dotenv");
const app = express();

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

//get a single chat by id
app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`SERVER STARTED ON PORT ${PORT}`));
