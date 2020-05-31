import db from './connection';
const { QueryTypes } = require('sequelize');

export const login = cod => db.query(
    'SELECT * FROM pap_user WHERE mail = :msil AND password = :password',
    { 
        replacements: { mail, password },
        type: QueryTypes.SELECT
    }
)