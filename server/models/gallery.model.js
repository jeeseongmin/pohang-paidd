const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gallerySchema = new Schema(
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
		imgList: {
			type: [String],
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Gallery = mongoose.model("Gallery", gallerySchema);

module.exports = Gallery;
