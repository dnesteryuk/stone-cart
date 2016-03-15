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
    }
  },

  attached: function() {
    this.cart = document.querySelector('stone-cart');

    if (this.cart) {
      this._checkStatusInCart();

      this._addCartListeners();
    }
    else {
      throw 'The stone-cart element is not found';
    }
  },

  detached: function() {
    if (this.cart) {
      this._removeCartListeners();
    }

    this.cart = null;
  },

  _itemSelected: function(action) {
    this.set('selected', (action == 'add'));
  },

  /**
   * Adds listeners to catch all changes in the cart.
   */
  _addCartListeners: function() {
    this.cart.addEventListener(
      'reset',
      this._checkStatusInCart.bind(this)
    );

    this.cart.addEventListener(
      'change',
      this._listenToChangeInCart.bind(this)
    );
  },

  _removeCartListeners: function() {
    this.cart.removeEventListener(
      'reset',
      this._checkStatusInCart.bind(this)
    );

    this.cart.removeEventListener(
      'change',
      this._listenToChangeInCart.bind(this)
    );
  },

  /**
   * If a state of the item is changed in the cart,
   * the button is notified.
   */
  _listenToChangeInCart: function(e) {
    if (e.detail.item.id == this.item.id) {
      this._itemSelected(e.detail.action);
    }
  },

  _checkStatusInCart: function() {
    this.set('selected', this.cart.hasItem(this.item));
  },

  _extractItemId: function(item) {
    return item.id;
  }
};