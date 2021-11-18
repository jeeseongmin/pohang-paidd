const express = require("express");
const multer = require("multer");
const fs = require("fs");
const mongoose = require("mongoose");
const path = require("path");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");
const crypto = require("crypto");
const router = express.Router();
const API_KEY = require("../../keyconfig");
const db = require("../../dbconfig");
var mime = require("mime");
var getDownloadFilename =
	require("./lib/getDownloadFilename").getDownloadFilename;

const _storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "uploads/");
	},
	filename: (req, file, callback) => {
		callback(null, `${Date.now()}_${file.originalname}`);
	},
});
const uploader = multer({ storage: _storage }).single("file");

const uri = db;
const connect = mongoose.createConnection(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

let gfs;

connect.once("open", () => {
	gfs = new mongoose.mongo.GridFSBucket(connect.db, {
		bucketName: "uploads",
	});
});

// create storage engine
var storage = new GridFsStorage({
	url: db,
	file: (req, file) => {
		return new Promise((resolve, reject) => {
			crypto.randomBytes(16, (err, buf) => {
				if (err) {
					return reject(err);
				}
				const ext = path.extname(file.originalname);
				const filename = path.basename(file.originalname, ext) + ext;
				const fileInfo = {
					filename: filename,
					bucketName: "uploads",
				};
				resolve(fileInfo);
			});
		});
	},
});

const upload = multer({ storage });

// 이미지 업로드를 위한 API
// upload의 single 메서드는 하나의 이미지를 업로드할 때 사용
router.post("/upload", upload.single("file"), (req, res) => {
	res.json({ filename: `${req.file.filename}`, id: `${req.file.id}` });
});

router.get("/delete/:filename", (req, res) => {
	fs.unlink(`uploads/${req.params.filename}`, (err) => {
		console.log(req.params.filename);
		//요청한 주소로 리다이렉션
		res.end();
	});
	return res.json(filename);
});

router.route("/:url").get((req, res) => {
	fs.readFile("uploads/" + req.params.url, function (error, data) {
		res.writeHead(200, { "Content-Type": "text/html" });
		// console.log(data);
		// return res.json(data);
		res.end(data, "utf-8");
	});
});

router.route("/upload_page").post((req, res, next) => {
	console.log("파일 업로드");
	uploader(req, res, (err) => {
		if (err) {
			return res.json({ success: false, err });
		}
		return res.json({
			success: true,
			file: res.req.file,
		});
	});
});

router.route("/download/:filename").get((req, res, next) => {
	var upload_folder = "uploads/";
	var file = upload_folder + req.params.filename; // ex) /upload/files/sample.txt

	try {
		if (fs.existsSync(file)) {
			var filename = path.basename(file); // 파일 경로에서 파일명(확장자포함)만 추출
			var mimetype = mime.getType(file); // 파일의 타입(형식)을 가져옴
			console.log(filename, mimetype);
			res.setHeader("Content-disposition", "attachment; filename=" + filename); // 다운받아질 파일명 설정
			res.setHeader("Content-type", mimetype); // 파일 형식 지정

			var filestream = fs.createReadStream(file);
			filestream.pipe(res);
		} else {
			res.send("해당 파일이 없습니다.");
			return;
		}
	} catch (e) {
		// 에러 발생시
		console.log(e);
		res.send("파일을 다운로드하는 중에 에러가 발생하였습니다.");
		return;
	}

	return res.json("success");
});

module.exports = router;
