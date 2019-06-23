const express = require('express')
const router = new express.Router()

// controller
const repo=require('../controllers/getRepos')
router.post('/search',repo.getRepos);

module.exports=router