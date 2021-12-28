require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const port = 5001;

const userModel = require("./models/user");

mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log("mongo db connected"));

app.get("/api/", (req, res) => res.send("Hello World!"));
app.get("/api/list", async (req, res) => {
  const userList = await userModel.find();
  if (userList.length === 0) {
    return res.json({ data: "no user in fullstack" });
  }
  return res.json({ data: userList });
});

// Register user
app.post("/api/registration", (req, res) => {
  const newUser = req.body;
  userModel.create(newUser);
  return res.json({ data: "registered successfully" });
});

// Update user
app.put("/api/user/changepassword/:uname", async (req, res) => {
  const uname = req.params.uname;
  const pass = req.body.password;
  const updatedUser = await userModel.findOneAndUpdate(
    { username: uname },
    { password: pass },
    { new: true }
  );
  log("updatedUser", updatedUser);
  return res.json({ data: "password updated successfully" });
});

// delete user
app.delete("/api/user/delete/:name", async (req, res) => {
  //   const uname = req.params.uname;
  const deleteUser = await updatedUser.findOneAndDelete({
    name: req.params.name,
  });
  //   console.log("deletedUser", deletedUser);
  if (deleteUser) return res.json({ data: "User deleted successfully" });

  return res.json({ data: "User not available" });
});

app.post("/api/login", async (req, res) => {
  // const  newUser  = req.body;
  const userList = await userModel.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  // userModel.create(newUser);
  console.log(userList);
  if (userList)
    return res.json({ status: "ok", data: "login successfully", userList });
  return res.json({ status: "error", data: "wrong cred " });
});
app.listen(port, () => console.log("server running on port ", port));
