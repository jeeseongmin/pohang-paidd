// import { v4 as uuidv4 } from "uuid";
const router = require("express").Router();
let Support = require("../../models/support.model");

// Read all support
router.route("/").post((req, res) => {
	if (req.body.key === process.env.REACT_APP_API_KEY) {
		Support.find()
			.sort({ createdAt: -1 })
			.then((all) => res.json(all))
			.catch((err) => res.status(400).json("Error: " + err));
	} else res.status(400).json("Error");
});

// Read specific support
router.route("/:id").post((req, res) => {
	if (req.body.key === process.env.REACT_APP_API_KEY) {
		Support.findById(req.params.id)
			.then((one) => res.json(one))
			.catch((err) => res.status(400).json("Error: ") + err);
	} else res.status(400).json("Error");
});

// paging
router.route("/page/:page").post((req, res) => {
	if (req.body.key === process.env.REACT_APP_API_KEY) {
		Support.find()
			.sort({ createdAt: -1 })
			.skip((req.params.page - 1) * 10)
			.limit(10)
			.then((all) => res.json(all))
			.catch((err) => res.status(400).json("Error: " + err));
	} else res.status(400).json("Error");
});

// Create support
router.route("/add/:status").post((req, res) => {
	if (req.body.key === process.env.REACT_APP_API_KEY) {
		const one = {
			status: req.params.status,
			name: req.body.name,
			private: req.body.private,
			phone: req.body.phone,
			email: req.body.email,
			address: req.body.address,
			periodical: req.body.periodical,
			temporary: req.body.temporary,
			goods: req.body.goods,
		};

		const newOne = new Support(one);

		newOne
			.save()
			.then(() => res.json("Support added!"))
			.catch((err) => res.status(400).json("Error: " + err));
	} else res.status(400).json("Error");
});

// Update support
router.route("/update/:id").post((req, res) => {
	if (req.body.key === process.env.REACT_APP_API_KEY) {
		Support.findById(req.params.id)
			.then((one) => {
				one.status = req.body.status;
				one.name = req.body.name;
				one.private = req.body.private;
				one.phone = req.body.phone;
				one.email = req.body.email;
				one.address = req.body.address;
				one.periodical = req.body.periodical;
				one.temporary = req.body.temporary;
				one.goods = req.body.goods;

				one
					.save()
					.then(() => res.json("Support updated!"))
					.catch((err) => res.status(400).json("Error: " + err));
			})
			.catch((err) => res.status(400).json("Error: " + err));
	} else res.status(400).json("Error");
});

router.route("/delete/:id").post((req, res) => {
	if (req.body.key === process.env.REACT_APP_API_KEY) {
		Support.findByIdAndDelete(req.params.id)
			.then(() => res.json("Support deleted."))
			.catch((err) => res.status(400).json("Error: " + err));
	} else res.status(400).json("Error");
});

module.exports = router;
