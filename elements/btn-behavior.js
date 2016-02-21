/**
 * Common behavior for the cart buttons.
 *
 * @polymerBehavior
 */
var StoneCartBtnBehavior = {
  properties: {
    /**
     * Indicates whether the item is in the cart.
     * It is true if it is in the cart.
     *
     * Example:
     *
     *     <stone-cart-add-btn selected></stone-cart-add-btn>
     */
    selected: {
      type:               Boolean,
      value:              false,
      notify:             true,
      reflectToAttribute: true
    },

    /**
     * Exposes the id of an item the button is associated with.
     */
    itemId: {
      type:               Object,
      readOnly:           true,
      notify:             true,
      reflectToAttribute: true,
      computed:           '_extractItemId(item)'
    },

    /**
     * The list of items in the cart.
     */
    cartItems: {
      type:   Array,
      notify: true,
      value:  function() { return []; }
    }
  },

  observers: [
    '_checkStatusInCart(cartItems, item)',
    '_change(cartItems.splices, item)'
  ],

  _checkStatusInCart: function() {
    var index = StoneCartHelpers.indexOfItem(this.cartItems, this.item);

    this.set('selected', index > -1);
  },

  _change: function(splices) {
    if (splices && splices.indexSplices) {
      var changes = splices.indexSplices[0];

      if (changes.addedCount > 0) {
        var changedItem = this.cartItems[changes.index];

        if (changedItem.id == this.item.id) {
          this.set('selected', true);
        }
      }
      else {
        changes.removed.map(function(changedItem) {
          if (changedItem.id == this.item.id) {
            this.set('selected', false);
          }
        }.bind(this));
      }
    }
  },

  _extractItemId: function(item) {
    return item.id;
  }
};