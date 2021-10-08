
const GenericController = Model => ({
    get(conditions) {
        return Model.findAll(conditions ? { where: conditions } : {});
    },
    getById(id) {
        return Model.getById(id);
    },
    create(data) {
        return Model.create(data);
    },
    updateById(id, data) {
        return Model.updateById(id, data);
    },
    deleteById(id) {
        return Model.deleteById(id);
    }
});

export default GenericController;
