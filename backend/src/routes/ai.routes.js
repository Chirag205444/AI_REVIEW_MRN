const express = require('express');
const router = express.Router();
const aiController = require('../controlers/ai.conntrollers');

router.post("/get-response", aiController.genRes);


module.exports = router;