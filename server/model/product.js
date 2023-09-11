const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
//   author: ObjectId,
coverimge: String,
name: { type:String, required: true, max:[60, '最大60文字までです'] },
price: Number,
description: String,
heaging1: String,
heaging2: String,
heaging3: String,
heagingtext1: String,
heagingtext2: String,
heagingtext3: String,
});

module.exports = mongoose.model('Product', ProductSchema)