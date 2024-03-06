const express = require("express");
const app = express();
const port = 5000;
// const cors = require("cors");

const mongoDB = require("./db");
mongoDB();

// app.use(cors(
//   { origin: [""] } 
// ));

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Welcome to the backend of Hungry Shaed");
});

app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/LoginUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));

app.listen(port, () => {
  console.log(`hungryShaed app is listening on port ${port}`);
});
