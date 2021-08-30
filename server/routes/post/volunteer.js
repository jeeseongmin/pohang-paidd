// import { v4 as uuidv4 } from "uuid";
const router = require("express").Router();
let Volunteer = require("../../models/volunteer.model");

// Read all volunteer
router.route("/").get((req, res) => {
	Volunteer.find()
		.sort({ createdAt: -1 })
		.then((all) => res.json(all))
		.catch((err) => res.status(400).json("Error: " + err));
});

// Read specific volunteer
router.route("/:id").get((req, res) => {
	Volunteer.findById(req.params.id)
		.then((one) => res.json(one))
		.catch((err) => res.status(400).json("Error: ") + err);
});

// paging
router.route("/:page").get((req, res) => {
	Volunteer.find()
		.sort({ createdAt: -1 })
		.skip((req.params.page - 1) * 10)
		.limit(10)
		.then((all) => res.json(all))
		.catch((err) => res.status(400).json("Error: " + err));
});

// Create volunteer
router.route("/add").post((req, res) => {
	const one = {
		status: req.body.status,
		name: req.body.name,
		birth: req.body.birth,
		phone: req.body.phone,
		vms: req.body.vms,
		activity: req.body.activity,
		hopeContent: req.body.hopeContent,
		hopeTime: req.body.hopeTime,
	};

	const newOne = new Volunteer(one);

	newOne
		.save()
		.then(() => res.json("Volunteer added!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

// Update volunteer
router.route("/update").post((req, res) => {
	Volunteer.findById(req.body.id)
		.then((one) => {
			one.status = req.body.status;
			one.name = req.body.name;
			one.birth = req.body.birth;
			one.phone = req.body.phone;
			one.vms = req.body.vms;
			one.activity = req.body.activity;
			one.hopeContent = req.body.hopeContent;
			one.hopeTime = req.body.hopeTime;

			one
				.save()
				.then(() => res.json("Volunteer updated!"))
				.catch((err) => res.status(400).json("Error: " + err));
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete").post((req, res) => {
	Volunteer.findByIdAndDelete(req.body.id)
		.then(() => res.json("Volunteer deleted."))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
