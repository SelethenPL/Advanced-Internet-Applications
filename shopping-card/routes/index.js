var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Card = require('../models/card');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs) {
    var products = [];
    var chunkSize = 3;
    for (let i = 0; i < docs.length; i+=chunkSize) {
      products.push(docs.slice(i, i+chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Card', products: products});
  });
});

router.get('/add-to-card/:id', function(req, res, next) {
  var productId = req.params.id;
  var card = new Card(req.session.card ? req.session.card : {items: {}});

  Product.findById(productId, function (err, product) {
    if (err) {
      // error box
      return res.redirect('/');
    }
    const bool = card.add(product, product.id);
    console.log(bool);
    req.session.card = card;
    res.redirect('/');
  });
});

router.get('/remove-from-card/:id', function(req, res, next) {

  var productId = req.params.id;
  console.log('Product id: ' + productId);
  var card = new Card(req.session.card);

  Product.findById(productId, function(err, product) {
    if (err) {
      // error box
      return res.redirect('/');
    }
    card.remove(product, product.id);
    req.session.card = card;
    res.redirect('/shopping-card');
  })
})

router.get('/cancel/', function(req, res, next) {

  var card = new Card(req.session.card);

  card.clear();
  req.session.card = card;
  res.redirect('/shopping-card');

})

router.get('/confirm/', function(req, res, next) {
  var card = new Card(req.session.card);

  // validate
  let invalid = [];
  for (id in card.items) {
    Product.findById(id, function(err, prod) {
      if (prod === null)
        invalid.push(card.items[id].item);
    }); // null : id
  }

  if (invalid.length === 0) {
    for (id in card.items) {
      Product.findByIdAndRemove(id, function(err) {
        if (err) {
          console.log('Item ' + card.items[id].item.title + ' cannot be purchased.');
        }
      })
    }
  } else {
    for (i in invalid) {
      console.log('Item ' + i.title + ' cannot be purchased.');
    }
  }

  card.clear();
  console.log('Purchase succeed.');
  req.session.card = card;
  res.redirect('/');

})

router.get('/shopping-card', function(req, res, next) {
  if (!req.session.card) {
    return res.render('shop/shopping-card', {products: null});
  }
  let card = new Card(req.session.card);
  res.render('shop/shopping-card', {products:card.getArray(), totalPrice: card.totalPrice});

})

module.exports = router;
