const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noticeSchema = new Schema(
	{
		type: {
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
	},
	{
		timestamps: true,
	}
);

const Notice = mongoose.model("Notice", noticeSchema);

module.exports = Notice;
