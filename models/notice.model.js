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
		fileList: {
			type: [Object],
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

const Notice = mongoose.model("Notice", noticeSchema);

module.exports = Notice;
