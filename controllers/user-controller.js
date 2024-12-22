const userModel = require('../models/user-model');

const getAllUsers = async (req, res) => {
    try {
        const user = await userModel.getAllUsers();
        if (!user) return res.json({ message: 'User Not Found' });
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error Get All Users' });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.id);
        if (!user) return res.json({ message: 'User Not Found' });
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error Get User By Id' });
    }
};

const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const result = await userModel.updateUserById(id, { name, email });
        if (result.affectedRows === 0) return res.json({ message: 'User Not Found or No Changes Made' });
        res.json({ message: 'User Updated Successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error Update User By Id' });
    }
};

const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await userModel.deleteUserById(id);
        if (result.affectedRows === 0) return res.json({ message: 'User Not Found' });
        res.json({ message: 'User Deleted Successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error Delete User By Id' });
    }
};

module.exports = { getAllUsers, getUserById, updateUserById, deleteUserById };