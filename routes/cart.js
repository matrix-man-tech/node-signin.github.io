let express = require('express');
let app = require('../app');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {


  let products = [
    {
      no: 1,
      name: "Pizza",
      Type: "Food",
      Description: " This is good ",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      no: 2,
      name: "Boiled Eggs",
      Type: "Food",
      Description: " This is good ",
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"

    },
    {
      no: 3,
      name: "Salads",
      Type: "Food",
      Description: " This is good",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

    },
    {
      no: 4,
      name: "Burger",
      Type: 'Food',
      Description: " This is good ",
      image: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
  ]
  res.render('cart', { products });
});
module.exports = router;