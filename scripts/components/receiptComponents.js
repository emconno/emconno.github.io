const item = Vue.component('item', {
    props: ['name', 'price'],
    template: '<div class="item"><p class="item-element item-name">{{ name }}</p><p class="item-element item-price">${{ price }}</p></div>'
});