const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin.controller');
const userValidationSchema = require('../controller/admin.schema');
const {checkSchema} = require(`express-validator`);
const { isAdmin } = require('../middlewares/ IsAdmin.middleware');

router.use =((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

router.get('/',adminController.getGroceryItemsList);
router.get('/userslist',adminController.getUserList);
router.post('/createuser',isAdmin,checkSchema(userValidationSchema.createUser),adminController.addUser);
router.post('/addgroceries',isAdmin,adminController.addGroceryItems);
router.delete('/removegroceryitems',isAdmin,adminController.removeGroceryItems);
router.put('/updategroceryitems',isAdmin,adminController.updateGroceryItems);
router.post('/addtocart',adminController.addToCart);

module.exports = router;