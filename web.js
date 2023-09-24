const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const db = require("./dbconfig");
const http = require("http");
const https = require("https");
const fs = require("fs");

require("dotenv").config();

const app = express();
// cafe24 업로드 용
const port = process.env.PORT || 5000;

// const port = process.env.PORT || 8080;
// const port = 8001;

// const HTTP_PORT = 8443;
// const HTTPS_PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

// const uri = process.env.ATLAS_URI;
mongoose.Promise = global.Promise;

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log(err));

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const exercisesRouter = require("./routes/exercises");
const userRouter = require("./routes/user");
const loginRouter = require("./routes/login");
const counselingRouter = require("./routes/post/counseling");
const noticeRouter = require("./routes/post/notice");
const galleryRouter = require("./routes/post/gallery");
const supportRouter = require("./routes/post/support");
const volunteerRouter = require("./routes/post/volunteer");
const imageRouter = require("./routes/post/image");
const fileRouter = require("./routes/post/file");

app.use("/exercises", exercisesRouter);
app.use("/api/user", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/counseling", counselingRouter);
app.use("/api/notice", noticeRouter);
app.use("/api/gallery", galleryRouter);
app.use("/api/support", supportRouter);
app.use("/api/volunteer", volunteerRouter);
app.use("/api/image", imageRouter);
app.use("/api/file", fileRouter);

// app.use(express.static(path.join(__dirname, "./client/build")));

// cafe24 업로드용
app.use(express.static(path.join(__dirname, "./build")));

app.get("*", function (req, res) {
  // res.sendFile(path.join(__dirname, "./client/build/index.html"));
  // cafe24 업로드용
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
