const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

require("dotenv").config({ path: "./config.env" });
require("./server");

// initiate express
const app = express();
app.use(express.json());
app.use(bodyParser());
app.use(cors());


app.use(express.static("images"));

const userRouter = require("./Router/userRouter");
const freelancerRouter = require("./Router/freelancerRouter");
const reviewRouter = require("./Router/reviewRouter");
const jobRouter = require("./Router/jobRouter");
const paymentRouter = require("./Router/paymentRouter");
const clientRouter = require("./Router/clientRouter");
const conversationRouter = require("./Router/conversationRouter");
const messageRouter = require("./Router/messageRouter");



app.use("/api/conversations", conversationRouter);
app.use("/api/messages", messageRouter);
app.use("/api/user", userRouter);
app.use("/api/freelancer", freelancerRouter);
app.use("/api/client", clientRouter);
app.use("/api/review", reviewRouter);
app.use("/api/job", jobRouter);
app.use("/api/payment", paymentRouter);



app.use(express.static("client/build"));
app.use("*", (req, res) => {
  res.send(path.resolve(__dirname, "client", "build", "index.html"));
});



app.listen(process.env.port, () => {
  console.log("listening on port");
});
