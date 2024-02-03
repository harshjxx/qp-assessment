const createUser = {
    username:{
        errorMessage: "username should be at least 3 charaters",
        trim: true,
        isLength: {
            options:{
                min: 3
            }
        }
    },
    password: {
        isLength:{
            options: {
                min:8
            },
            trim: true,
            errorMessage: "password should be at least 8 charaters"
        }
    },
    email:{
        isEmail: true,
        trim: true,
        errorMessage: "Invalid Email"
    }
}

const createGrocery = {
    grocery_name:{
        errorMessage: "createGrocery should be at least 3 charaters",
        trim: true,
        isLength: {
            options:{
                min: 3
            }
        }
    },
    grocery_price: {
        errorMessage: "Grocery price should be present",
        trim: true,
    }
}

module.exports = {
    createUser,
    createGrocery
}