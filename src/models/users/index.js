import Schema from './schema';

export const create = (mail, username, password) => Schema.create({
    mail,
    username,
    password,
});

export const update = (id, data) => Schema.update(data, { where: { id } });

export const remove = id => Schema.destroy({ where: { id } });

export const getByEmailAndPassword = (mail, password) => Schema.findOne({
    where: {
        mail,
        password
    }
});

export const getById = (id) => Schema.findOne({
    where: {
        id
    }
});

export const get = () => Schema.findAll();
