const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const counselingSchema = new Schema(
	{
		status: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		writer: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		response: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

const Counseling = mongoose.model("Counseling", counselingSchema);

module.exports = Counseling;
