import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
    try {
        const response = await User.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getUsersById = async (req, res) => {
    try {
        const response = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.json({msg: "user created successfully"});
    } catch (error) {
        console.log(error.message);
    }
};

export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({msg: "user update successfully"});
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({msg: "user delete successfully"});
    } catch (error) {
        console.log(error.message);
    }
};
