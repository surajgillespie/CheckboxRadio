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

    model.Model.prototype.remove = function (id) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id == id) {
                this.items.splice(i, 1);
                break;
            }
        }
    };

    return model;

});
