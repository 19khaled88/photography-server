const express = require('express')
const router = express.Router()
const bannerController = require('../controllers/banner.controllers')

router
  .route('/banner')
  .post(bannerController.postBannerController)
  .get(bannerController.getBannerController)

router
  .route('/banner-delete/:id')
  .delete(bannerController.deleteBannerController)
module.exports = router
