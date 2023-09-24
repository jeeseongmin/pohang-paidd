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
      type: [Object],
      required: false,
    },
    // 용량 문제 해결을 위한 구글 드라이브 이미지에 대한 imageUrlList
    imageUrlList: {
      type: [String],
      required: false,
    },
    // 구글 드라이브 이미지에 대한 imageUrlList를 실제 보이는 형식으로 convert한 urlList
    convertedImageUrlList: {
      type: [String],
      required: false,
    }
  },
  {
    timestamps: true,
  }
);

const Gallery = mongoose.model("Gallery", gallerySchema);

module.exports = Gallery;
