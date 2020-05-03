const express = require('express');
const router = express.Router();

const ReportModel = require('../model/report');


router.post('/day', function (req, res) {
    const iv = new ReportModel({
        report_date: rep.reportDate,
        content: req.content,
        score: req.score,
    })
    
    iv.save(function(err) {
        res.send('등록완료')
    })
});

module.exports = router;