var StoneCartHelpers = {
  /**
   * Finds an item by the id property in a given array
   * and returns its index.
   */
  indexOfItem: function(items, item) {
    for (var i = 0; i < items.length; i++) {
      var currentItem = items[i];

      if (currentItem.id == item.id) {
        return i;
      }
    }

    return -1;
  }
};
