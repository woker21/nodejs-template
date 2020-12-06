import UserSchema from './schema';

export const createUser = (mail, password) => UserSchema.create({
    mail,
    password,
});

export const updateUser = (id, data) => UserSchema.update(data, { where: { id }});

export const deleteUser = id => UserSchema.destroy({ where: { id }});

export const getUserByEmailAndPassword = (mail, password) => UserSchema.findOne({
    where: {
        mail,
        password
    }
});
