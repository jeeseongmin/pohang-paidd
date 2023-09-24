const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const supportSchema = new Schema(
	{
		status: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		private: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		periodical: {
			type: Number,
			required: false,
		},
		temporary: {
			type: Number,
			required: false,
		},
		goods: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

const Support = mongoose.model("Support", supportSchema);

module.exports = Support;
