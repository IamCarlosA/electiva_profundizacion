const { request, response } = require('express');

//model
const User = require('../models/user.model');

const createUser = async (req = request, res = response) => {
    const user = req.body;

    const newUser = new User(user);
    await newUser.save((error) => {
        if (!error) {
            res.status(201).json({
                "state": true,
                message: `User ${user.name} created succefully`
            })
        } else {
            console.error(error)
            res.status(500).json({
                "state": false,
                "message": "Error server"
            });
        }
    });
}

const getAllUsers = async (req = request, res = response) => {

    await User.find((error, users) => {
        if (!error) {
            res.status(200).json({
                "state": true,
                users
            })
        } else {
            console.error(error)
            res.status(500).json({
                "state": false,
                "message": "Error server"
            });
        }
    }).sort({ createdAt: -1 });

}

const getUserById = async (req = request, res = response) => {
    const id = req.params.id;

    await User.findById(id, (error, user) => {
        if (!error) {
            if (user) {
                res.status(200).json({
                    "state": true,
                    user
                })
            } else {
                res.status(404).json({
                    "state": false,
                    "message": "user not found"
                })
            }

        } else {
            console.error(error)
            res.status(500).json({
                "state": false,
                "message": "Error server"
            });
        }
    });

}

const updateUser = async (req = request, res = response) => {
    const updateUser = req.body;
    const id = req.params.id;
    await User.findByIdAndUpdate(id, updateUser, (error, user) => {
        if (!error) {
            if (user) {
                res.status(200).json({
                    "state": true,
                    "message": "user updated"
                })
            } else {
                res.status(404).json({
                    "state": false,
                    "message": "Product not found"
                })
            }

        } else {
            console.error(error)
            res.status(500).json({
                "state": false,
                "message": "Error server"
            });
        }
    });

}

const deleteUser= async (req = request, res = response) => {
    const id = req.params.id;
    await User.findByIdAndDelete(id, (error, user) => {
        if (!error) {
            if (user) {
                res.status(200).json({
                    "state": true,
                    "message": "user deleted"
                })
            } else {
                res.status(404).json({
                    "state": false,
                    "message": "user not found"
                })
            }

        } else {
            console.error(error)
            res.status(500).json({
                "state": false,
                "message": "Error server"
            });
        }
    });

}


module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}