var BtnBehavior = {
  properties: {
    item: {
      type: Object
    }
  },

  attached: function() {
    this.cart = document.querySelector('stone-cart');
    this.cart.registerBtn(this.kind, this.item.id, this);
  },

  detached: function() {
    this.cart.unregisterBtn(this.kind, this.item.id, this);
  }
};