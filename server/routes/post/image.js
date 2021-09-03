const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const router = express.Router();

fs.readdir("uploads", (error) => {
	if (error) {
		fs.mkdirSync("uploads");
	}
});

const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, cb) {
			cb(null, "uploads/");
		},
		filename(req, file, cb) {
			const ext = path.extname(file.originalname);
			cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
		},
	}),
	limits: { fileSize: 5 * 1024 * 1024 },
});
// 이미지 업로드를 위한 API
// upload의 single 메서드는 하나의 이미지를 업로드할 때 사용
router.post("/upload", upload.single("file"), (req, res) => {
	console.log(req.file);
	res.json({ url: `${req.file.filename}` });
});

router.post("/delete", (req, res) => {
	fs.unlink("uploads/" + req.body.name, (err) => {
		console.log(req.body.name);
		res.writeHead(302, { Location: "/" });
		res.end();
	});
});

router.route("/:url").get((req, res) => {
	fs.readFile("uploads/" + req.params.url, function (error, data) {
		res.writeHead(200, { "Content-Type": "text/html" });
		// console.log(data);
		// return res.json(data);
		res.end(data, "utf-8");
	});
});

// router.get("")

module.exports = router;
