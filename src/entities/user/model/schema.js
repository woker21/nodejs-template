import { db, DataTypes } from '@Application/database';

export default db.define('user', {
	username: DataTypes.STRING,
	password: DataTypes.STRING,
	email: DataTypes.STRING,
});

