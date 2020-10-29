import { db } from '../../database';
const { DataTypes } = require('sequelize');

const User = db.define('user', {
	password: DataTypes.STRING,
	username: DataTypes.STRING,
});

export default User;