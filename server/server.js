const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

const API_KEY = process.env.REACT_APP_API_KEY;

mongoose.connect(uri, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
});

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

app.use("/exercises", exercisesRouter);
app.use("/api/" + API_KEY + "/user", userRouter);
app.use("/api/" + API_KEY + "/login", loginRouter);
app.use("/api/" + API_KEY + "/counseling", counselingRouter);
app.use("/api/" + API_KEY + "/notice", noticeRouter);
app.use("/api/" + API_KEY + "/gallery", galleryRouter);
app.use("/api/" + API_KEY + "/support", supportRouter);
app.use("/api/" + API_KEY + "/volunteer", volunteerRouter);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
