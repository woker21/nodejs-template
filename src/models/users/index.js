import UserSchema from './schema';

export const createUser = (username, password) => UserSchema.create({
    username,
    password,
});

export const updateUser = (id, data) => UserSchema.update(data, { where: { id }});

export const deleteUser = id => UserSchema.destroy({ where: { id }});

export const getUserByEmailAndPassword = (username, password) => UserSchema.findOne({
    where: {
        username,
        password
    }
});
