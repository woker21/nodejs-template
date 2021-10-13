import {Sequelize, DataTypes} from 'sequelize';

const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const forceCleanDatabase = process.env.DB_FORCE_CLEAN === 'true';

export const db = new Sequelize(database, user, password, {
    host,
    dialect: 'mysql',
});

export {DataTypes};

export const setAssociations = (db) => {
    Object.keys(db.models).forEach((modelName) => {
        if ('associate' in db.models[modelName]) {
            db.models[modelName].associate(db.models);
        }
    });
};

export default async (onConnect) => {
    try {
        await setAssociations(db);
        await db.authenticate();
        db.sync({force: forceCleanDatabase});
        onConnect();
        console.log('Database connection OK!');
    } catch (error) {
        console.log('Unable to connect to the database:');
    }
}