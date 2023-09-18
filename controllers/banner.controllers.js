const Banner = require('../models/banner.model')
const cloudinary = require('cloudinary')
const getBannerController = async (req, res) => {
  try {
    const cursor = await Banner.find({})
    res.status(201).json(cursor)
  } catch (error) {
    res.status(400).json({
      status: 'Failed',
      success: false,
    })
  }
}

const postBannerController = async (req, res) => {
  const banner = new Banner({
    title: req.body.title,
    banner: req.body.banner,
    publicid:req.body.publicid
  })

  try {
    const posted = await banner.save()
    res.status(201).json({
      status: 'success',
      data: posted,
    })
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    })
  }
}

const deleteBannerController = async (req, res) => {
  try {
   
    const getpId = await Banner.findById(req.params.id)
    if(getpId){
      cloudinary.v2.uploader.destroy(getpId.publicid,async(err,_)=>{
        if(err) throw err; 
        const result = await Banner.deleteOne({ _id: req.params.id })
        res.status(201).json({status:'success',result})
      })
    }
  
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error.message,
    })
  }
}

module.exports = {
  getBannerController,
  postBannerController,
  deleteBannerController,
}
