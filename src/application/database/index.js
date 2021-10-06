import { Sequelize } from 'sequelize';

const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const forceCleanDatabase = process.env.DB_FORCE_CLEAN === 'true';

export const db = new Sequelize(database, user, password, {
	host,
	dialect: 'mysql',
	query: { raw: true }
});

export default async (onConnect) => {
	try {
		await db.authenticate();
		db.sync({ force: forceCleanDatabase });
		onConnect();
		console.log('Database connection OK!');
	} catch (error) {
		console.log('Unable to connect to the database:');
	}
}