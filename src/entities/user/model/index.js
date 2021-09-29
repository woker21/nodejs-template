import Schema from './schema';

export const create = (mail, username, password) => Schema.create({
    mail,
    username,
    password,
});

export const update = (id, data) => Schema.update(data, { where: { id } });

export const remove = id => Schema.destroy({ where: { id } });



export const get = () => Schema.findAll();

export const getById = (id) => Schema.findOne({
    where: {
        id
    }
});

export const getByConditions = (conditions) => Schema.findOne({
    where: {
        teacherId: conditions.teacherId,
        cod: conditions.cod
    }
});