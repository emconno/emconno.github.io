const receipt = new Vue({
    el: '#receipt',
    data: {
        orderItems: [
            {item: 'pepperoni', category: 'topping', quantity: 2, price: 5},
            {item: 'spinach', category: 'topping', quantity: 1, price: 5},
            {item: 'sausage', category: 'topping', quantity: 3, price: 5},
            {item: 'no topping', category: 'topping', quantity: 1, price: 4},
            {item: 'rc', category: 'drink', quantity: 2, price: 0},
            {item: 'root beer', category: 'drink', quantity: 1, price: 0},
            {item: 'red pepper flakes', category: 'condiment', quantity: 2, price: 0}
        ]

    },
    computed: {
        receiptData: function() {
            let data = [];
            this.orderItems.forEach(el => {
                readableItemData = {};
                if (el.category === 'topping') {
                    readableItemData.name = this.capitalizeFirstLetter(el.item) + ' slice x' + el.quantity;
                } else if (el.category === 'drink' || el.category === 'condiment') {
                    if (el.item === 'rc') {
                        readableItemData.name = 'RC Cola';
                    } else {
                        readableItemData.name = this.capitalizeFirstLetter(el.item);
                    }
                    readableItemData.name += ' x' + el.quantity;
                } else {
                    console.log("UNRECOGNIZED ITEM CATEGORY");
                }
                readableItemData.price = el.price * el.quantity;
                data.push(readableItemData);
            });

            return data;
        },

        total: function() {
            let total = 0;
            this.orderItems.forEach( el => {
                total += el.quantity * el.price;
            });
            return total;
        }
    },
    methods: {
        capitalizeFirstLetter: function(el) {
            return String(el).charAt(0).toUpperCase() + el.slice(1);
        }
    }
});