const { validationResult } = require('express-validator');
const { models } = require('../model/index')

const addUser = async (req, res) => {
    try {
        const result = validationResult(req);
        if (result.isEmpty()){
            const createUser = await models.User.create(req.body);
            return res.status(201).send(`User ${req.body.username} is created successfully!`);
        }
        res.status(400).send({errors: result.array()});
    } catch (err) {
        console.log(err);
        res.status(500).send('somthing went wrong!');
    }
};

const getUserList = async (req, res) => {
    try {
        const responseObject = {
            responseCode: 200,
            response:[]
        };
        const users = await models.User.findAll();
        if (users.length) {
            responseObject.responseCode = 200;
            responseObject.response = users;
        }
        res.status(200).json(JSON.stringify(responseObject));
    } catch (err) {
        res.status(500).send('somthing went wrong!');
    }
    // module will call here;
    // res.send('success!');
};

const addGroceryItems = async (req, res) => {
    try {
        const result = validationResult(req);
        if (result.isEmpty()){
            const createGrocery = await models.Grocery.bulkCreate(req.body);
            return res.status(201).send(`groceries are created successfully!`);
        }
        res.status(400).send({errors: result.array()});
    } catch (err) {
        console.log(err);
        res.status(500).send('somthing went wrong!');
    }
};

const getGroceryItemsList = async (req, res) => {
    try {
        const responseObject = {
            responseCode: 200,
            response:[]
        };
        const grocery = await models.Grocery.findAll();
        if (grocery.length) {
            responseObject.responseCode = 200;
            responseObject.response = grocery;
        }
        res.status(200).json(JSON.stringify(responseObject));
    } catch (err) {
        res.status(500).send('somthing went wrong!');
    }
    // module will call here;
    // res.send('success!');
};

const removeGroceryItems = async (req, res) => {
    try {
        const ids = req.body.groceryIds
        if (ids.length) {
            const deletedGrocery = await models.Grocery.destroy({
                where: {
                    id: ids
                }
            });
            if (deletedGrocery === 0) {
                return res.status(404).json({ error: 'Grocery not found' });
            }
            res.json({ message: 'Grocery deleted successfully' });
        } else {
            res.status(400).send({errors: 'please insert ids to delete items'});
        }


    } catch (error) {
        console.log(error);
        res.status(500).send('somthing went wrong!');
    }
}

const updateGroceryItems = async (req, res) => {
    try {
        const ids = req.body.groceryIds
        const groceryData = req.body.groceryData
        if (ids.length) {
            const updateGrocery = await models.Grocery.update(groceryData,{
                where: {
                    id: ids
                }
            });
            if (updateGrocery === 0) {
                return res.status(404).json({ error: 'Grocery not found' });
            }
            res.json({ message: 'Grocery updated successfully' });
        } else {
            res.status(400).send({errors: 'please insert ids to update items'});
        }


    } catch (error) {
        console.log(error);
        res.status(500).send('somthing went wrong!');
    }
}


const addToCart = async (req, res) => {
    try {
        //assuming here that i have user id and grocery id is present in db so instead of checking those id adding diectly in cart table
        if ( req.body.userId && req.body.groceryId) {
            const payload = {
                user_id: req.body.userId,
                cart_details:JSON.stringify(req.body.groceryId)
            }
            const createUser = await models.Cart.create(payload);
            const getCart = await models.Cart.findAll({
                where:{
                    user_id: req.body.userId
                } 
            });
            return res.status(201).send({ 
                msg: `Cart is for userid ${req.body.userId} created successfully!`,
                response:getCart
            });
        } else {
            res.status(400).send({errors: 'Cart id or groceryId is required'});
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('somthing went wrong!');
    }
}

module.exports = {
    addUser,
    getUserList,
    addGroceryItems,
    getGroceryItemsList,
    removeGroceryItems,
    updateGroceryItems,
    addToCart
}