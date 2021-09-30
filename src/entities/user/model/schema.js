import { db } from '@Application/database';
const { DataTypes } = require('sequelize');

export default db.define('user', {
	username: DataTypes.STRING,
	password: DataTypes.STRING,
	email: DataTypes.STRING,
});

