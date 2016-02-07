var BtnBehavior = {
  properties: {
    item: {
      type: Object
    }
  },

  attached: function() {
    // TODO: show an error if there isn't a cart.
    this.cart = document.querySelector('stone-cart');
    this.cart.registerBtn(this.kind, this.item.id, this);
  },

  detached: function() {
    this.cart.unregisterBtn(this.kind, this.item.id, this);
  }
};