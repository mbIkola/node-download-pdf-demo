const express = require('express');
const router = express.Router();
const fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/pdf', (req, res) => {
    const file = fs.createReadStream('./public/assets/bill.pdf');
    const stat = fs.statSync('./public/assets/bill.pdf');
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=bill.pdf');
    file.pipe(res);

});

module.exports = router;
