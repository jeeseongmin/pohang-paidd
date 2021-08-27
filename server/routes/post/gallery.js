// import { v4 as uuidv4 } from "uuid";
const router = require("express").Router();
let Gallery = require("../../models/gallery.model");

// Read all gallery
router.route("/").get((req, res) => {
	Gallery.find()
		.sort({ createdAt: -1 })
		.then((all) => res.json(all))
		.catch((err) => res.status(400).json("Error: " + err));
});

// Read specific gallery
router.route("/:id").get((req, res) => {
	Gallery.findById(req.params.id)
		.then((one) => res.json(one))
		.catch((err) => res.status(400).json("Error: ") + err);
});

// Read specific type gallery
// org1, org2, org3, org4, participation
router.route("/:type").get((req, res) => {
	Gallery.find({ type: req.params.type })
		.then((one) => res.json(one))
		.catch((err) => res.status(400).json("Error: ") + err);
});

// paging
router.route("/:page").get((req, res) => {
	Gallery.find()
		.sort({ createdAt: -1 })
		.skip((req.params.page - 1) * 10)
		.limit(10)
		.then((all) => res.json(all))
		.catch((err) => res.status(400).json("Error: " + err));
});

// Create gallery
router.route("/add").post((req, res) => {
	const one = {
		type: req.body.type,
		title: req.body.title,
		content: req.body.content,
		imagePath: req.body.imagePath,
	};

	const newOne = new Gallery(one);

	newOne
		.save()
		.then(() => res.json("Gallery added!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

// Update gallery
router.route("/update/:id").post((req, res) => {
	Gallery.findById(req.params.id)
		.then((one) => {
			one.title = req.body.title;
			one.content = req.body.content;
			one.imagePath = req.body.imagePath;

			one
				.save()
				.then(() => res.json("Gallery updated!"))
				.catch((err) => res.status(400).json("Error: " + err));
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
	Gallery.findByIdAndDelete(req.params.id)
		.then(() => res.json("Gallery deleted."))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
