var express = require('express');
const productHelpers = require('../helpers/product-helpers');
const productHelpers1 = require('../helpers/product-helpers');


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cashreceipt', (req,res)=>{
  res.render('../views/cashreceipt'); // compulsory  required ../views
});
router.get('/cashpayment', (req,res)=>{
  res.render('../views/cashpayment'); // compulsory  required ../views
});
router.get('/bankreceipt', (req,res)=>{
  res.render('../views/bankreceipt'); // compulsory  required ../views
});
router.get('/bankpayment', (req,res)=>{
  res.render('../views/bankpayment'); // compulsory  required ../views
});
router.get('/journal', (req,res)=>{
  res.render('../views/journal'); // compulsory  required ../views
});
router.get('/cashbook', (req,res)=>{
  res.render('../views/cashbook'); // compulsory  required ../views
});
router.get('/bankbook', (req,res)=>{
  res.render('../views/bankbook'); // compulsory  required ../views
});
router.get('/jreport', (req,res)=>{
  res.render('../views/jreport'); // compulsory  required ../views
});
router.get('/ledgerhead', (req,res)=>{
  productHelpers1.getAllProduct().then((masters)=>{
    res.render('../views/ledgerhead',{masters} ); 
  })




});
   


router.get('/daybook', (req,res)=>{
  res.render('../views/daybook'); // compulsory  required ../views
});
router.get('/trial', (req,res)=>{
  res.render('../views/trial'); // compulsory  required ../views
});
router.get('/profitloss', (req,res)=>{
  res.render('../views/profitloss'); // compulsory  required ../views
});
router.get('/balancesheet', (req,res)=>{
  res.render('../views/balancesheet'); // compulsory  required ../views
});
router.get('/ledger', (req,res)=>{
  res.render('../views/ledger'); // compulsory  required ../views
});
router.get('/sdebtors', (req,res)=>{
  res.render('../views/sdebtors'); // compulsory  required ../views
});
router.get('/screditors', (req,res)=>{
  res.render('../views/screditors'); // compulsory  required ../views
})

router.post ('/views/ledgerhead',(req,res)=> {
  productHelpers.ledgerhead (req.body,(result)=> {
    productHelpers1.getAllProduct().then ((masters)=> {
      res.render('../views/ledgerhead',{masters} ); 
   })
  })
})   




module.exports = router;
