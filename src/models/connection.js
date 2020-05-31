import { Sequelize } from 'sequelize';
import dbConfig from '../config/database';

const { dbName, user, password, host } = dbConfig;
export default new Sequelize(dbName, user, password, {
    host,
    dialect: 'mysql',
});