const mongoose = require('mongoose')
const bannerSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
    publicid: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Banner', bannerSchema)
