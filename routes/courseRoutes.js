const express = require('express')
const router = express.Router();
const courseController = require('../controllers/courseControllers')

router.post('/checkEmail', (req, res) => {
	courseController.checkEmailExists(req.body)
	.then(resultFromController => res.send(resultFromController));
})

module.exports = router;