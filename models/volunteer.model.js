const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const volunteerSchema = new Schema(
	{
		status: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		birth: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		vms: {
			type: String,
			required: true,
		},
		activity: {
			type: String,
			required: true,
		},
		hopeContent: {
			type: String,
			required: true,
		},
		hopeTime: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;
