// import { v4 as uuidv4 } from "uuid";
const router = require("express").Router();
let Counseling = require("../../models/counseling.model");

// Read all counseling
router.route("/").get((req, res) => {
	Counseling.find()
		.sort({ createdAt: -1 })
		.then((all) => res.json(all))
		.catch((err) => res.status(400).json("Error: " + err));
});

// Read specific counseling
router.route("/:id").get((req, res) => {
	Counseling.findById(req.params.id)
		.then((one) => res.json(one))
		.catch((err) => res.status(400).json("Error: ") + err);
});

// paging
router.route("/:page").get((req, res) => {
	Counseling.find()
		.sort({ createdAt: -1 })
		.skip((req.params.page - 1) * 10)
		.limit(10)
		.then((all) => res.json(all))
		.catch((err) => res.status(400).json("Error: " + err));
});

// Create counseling
router.route("/add").post((req, res) => {
	const one = {
		status: req.body.type,
		title: req.body.title,
		content: req.body.content,
		writer: req.body.writer,
		password: req.body.password,
		response: req.body.response,
	};

	const newOne = new Counseling(one);

	newOne
		.save()
		.then(() => res.json("Counseling added!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

// Update counseling
router.route("/update/:id").post((req, res) => {
	Counseling.findById(req.params.id)
		.then((one) => {
			// 작성자와 일치하는지
			if (one.writer !== req.body.writer || one.password !== req.body.password)
				return res.json("fail");

			one.title = req.body.title;
			one.content = req.body.content;

			one
				.save()
				.then(() => res.json("Counseling updated!"))
				.catch((err) => res.status(400).json("Error: " + err));
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

// Respond counseling
router.route("/respond/:id").post((req, res) => {
	Counseling.findById(req.params.id)
		.then((one) => {
			one.status = req.body.status;
			one.response = req.body.response;

			one
				.save()
				.then(() => res.json("Counseling responded!"))
				.catch((err) => res.status(400).json("Error: " + err));
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
	Counseling.findByIdAndDelete(req.params.id)
		.then(() => res.json("Counseling deleted."))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
