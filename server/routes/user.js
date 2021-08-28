// import { v4 as uuidv4 } from "uuid";
const router = require("express").Router();
let User = require("../models/user.model");

// Create
router.route("/add").post((req, res) => {
	const one = {
		type: req.body.type,
		email: req.body.email,
		password: req.body.password,
	};

	const newUser = new User(one);

	newUser
		.save()
		.then(() => res.json("User added!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

// Read
router.route("/").get((req, res) => {
	User.find()
		.then((all) => res.json(all))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/findbyemail/:email").get((req, res) => {
	User.find({ email: req.params.email })
		.then((one) => res.json(one))
		.catch((err) => res.status(400).json("Error: ") + err);
});

// Read specific notice
router.route("/:id").get((req, res) => {
	User.findById(req.params.id)
		.then((one) => res.json(one))
		.catch((err) => res.status(400).json("Error: ") + err);
});

// Password Update
router.route("/update/:id").post((req, res) => {
	User.findById(req.params.id)
		.then((one) => {
			one.password = req.body.password;

			one
				.save()
				.then(() => res.json("User Email & Password updated!"))
				.catch((err) => res.status(400).json("Error: " + err));
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
	User.findByIdAndDelete(req.params.id)
		.then(() => res.json("User deleted."))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
