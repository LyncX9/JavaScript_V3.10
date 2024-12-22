const db = require('../config/db');

const getAllUsers = async () => {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
};

const getUserById = async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
};

const updateUserById = async (id, data) => {
    const { name, email } = data;
    const [result] = await db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
    return result;
};

const deleteUserById = async (id) => {
    const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
    return result;
};

module.exports = { getAllUsers, getUserById, updateUserById, deleteUserById };