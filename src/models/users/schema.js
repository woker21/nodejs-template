import { db } from '../../application/database';
const { DataTypes } = require('sequelize');

export default db.define('user', {
	username: DataTypes.STRING,
	password: DataTypes.STRING,
	mail: DataTypes.STRING,
});

