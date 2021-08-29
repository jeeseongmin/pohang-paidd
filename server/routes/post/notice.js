// import { v4 as uuidv4 } from "uuid";
const router = require("express").Router();
let Notice = require("../../models/notice.model");

// Read all notice
router.route("/").get((req, res) => {
	Notice.find()
		.sort({ createdAt: -1 })
		.then((all) => res.json(all))
		.catch((err) => res.status(400).json("Error: " + err));
});

// Read specific notice
router.route("/:id").get((req, res) => {
	Notice.findById(req.params.id)
		.then((one) => res.json(one))
		.catch((err) => res.status(400).json("Error: ") + err);
});

// Read specific type notice
// org1, org2, org3, org4, participation
router.route("/type/:type/:page").get((req, res) => {
	Notice.find({ type: req.params.type })
		.sort({ createdAt: -1 })
		.skip((req.params.page - 1) * 10)
		.limit(10)
		.then((one) => res.json(one))
		.catch((err) => res.status(400).json("Error: ") + err);
});

// Read specific type notice
// org1, org2, org3, org4, participation
router.route("/type/:type").get((req, res) => {
	Notice.find({ type: req.params.type })
		.sort({ createdAt: -1 })
		.then((one) => res.json(one))
		.catch((err) => res.status(400).json("Error: ") + err);
});

// paging
router.route("/:page").get((req, res) => {
	Notice.find()
		.sort({ createdAt: -1 })
		.skip((req.params.page - 1) * 10)
		.limit(10)
		.then((all) => res.json(all))
		.catch((err) => res.status(400).json("Error: " + err));
});

// Create notice
router.route("/add").post((req, res) => {
	const one = {
		type: req.body.type,
		title: req.body.title,
		content: req.body.content,
	};

	const newOne = new Notice(one);

	newOne
		.save()
		.then(() => res.json("Notice added!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

// Update notice
router.route("/update/:id").post((req, res) => {
	Notice.findById(req.params.id)
		.then((one) => {
			one.title = req.body.title;
			one.content = req.body.content;

			one
				.save()
				.then(() => res.json("Notice updated!"))
				.catch((err) => res.status(400).json("Error: " + err));
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
	Notice.findByIdAndDelete(req.params.id)
		.then(() => res.json("Notice deleted."))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
