// import { v4 as uuidv4 } from "uuid";
const router = require("express").Router();
let Volunteer = require("../../models/volunteer.model");

const API_KEY = process.env.REACT_APP_API_KEY;

// Read all volunteer
router.route("/").post((req, res) => {
	if (req.body.key === API_KEY) {
		Volunteer.find()
			.sort({ createdAt: -1 })
			.then((all) => res.json(all))
			.catch((err) => res.status(400).json("Error: " + err));
	} else res.status(400).json("Error");
});

// Read specific volunteer
router.route("/:id").post((req, res) => {
	if (req.body.key === API_KEY) {
		Volunteer.findById(req.params.id)
			.then((one) => res.json(one))
			.catch((err) => res.status(400).json("Error: ") + err);
	} else res.status(400).json("Error");
});

// paging
router.route("/page/:page").post((req, res) => {
	if (req.body.key === API_KEY) {
		Volunteer.find()
			.sort({ createdAt: -1 })
			.skip((req.params.page - 1) * 10)
			.limit(10)
			.then((all) => res.json(all))
			.catch((err) => res.status(400).json("Error: " + err));
	} else res.status(400).json("Error");
});

// Create volunteer
router.route("/add/:status").post((req, res) => {
	if (req.body.key === API_KEY) {
		const one = {
			status: req.params.status,
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
	} else res.status(400).json("Error");
});

// Update volunteer
router.route("/update/:id").post((req, res) => {
	Volunteer.findById(req.params.id)
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

router.route("/delete/:id").post((req, res) => {
	if (req.body.key === API_KEY) {
		Volunteer.findByIdAndDelete(req.params.id)
			.then(() => res.json("Volunteer deleted."))
			.catch((err) => res.status(400).json("Error: " + err));
	} else res.status(400).json("Error");
});

module.exports = router;
