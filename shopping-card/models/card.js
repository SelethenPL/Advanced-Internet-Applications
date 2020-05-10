module.exports = function Card(oldCard) {
    this.items = oldCard.items || {};
    this.totalQty = oldCard.totalQty || 0;
    this.totalPrice = oldCard.totalPrice || 0;

    this.add = function(item, id) {
        var stored = this.items[id];
        if (!stored) {
            stored = this.items[id] = {item: item, qty: 0, price: 0};
            stored.qty++;
            stored.price = stored.item.price
            this.totalQty++;
            this.totalPrice += stored.item.price;
            return true;
        } else {
            return false;
        }
    }

    this.remove = function(item, id) {
        var stored = this.items[id];
        stored.qty--;
        stored.price = stored.item.price * stored.qty;

        this.totalQty--;
        this.totalPrice -= stored.item.price;

        if (stored.qty === 0) {
            delete this.items[id];
        }
    }

    this.clear = function() {
        for (i in this.items) {
            delete this.items[i];
        }
        this.totalQty = 0;
        this.totalPrice = 0;
    }

    this.getArray = function() {
        var arr = [];
        for (let i in this.items) {
            arr.push(this.items[i]);
        }
        return arr;
    }
};