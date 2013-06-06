define(function (require) {

    var model = {};

    model.Model = function () {
        this.items = [];
    };

    model.Model.prototype.load = function (items) {
        this.items = items;
    };

    model.Model.prototype.create = function (title) {
        title = title || '';

        var newItem = {
            id: new Date().getTime(),
            title: title.trim(),
            completed: 0
        };

        this.items.push(newItem);
        return newItem;
    };

    return model;

});
