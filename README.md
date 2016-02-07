# Stone cart

It is a simple [Polymer-based](https://www.polymer-project.org) element providing a logic for adding items to a shopping cart and managing them within it.

```html
  <stone-cart items="{{items}}">
    Total price: [[total]]

    <template id="items" is="dom-repeat" items="{{items}}">
      [[item.name]] $[[item.price]]

      <stone-cart-remove-btn item="{{item}}">
        <button>Remove from my cart</button>
      </stone-cart-remove-btn>

    </template>
  </stone-cart>

  <stone-cart-add-btn item='{"id": 1, "name": "Apple", "price": "1"}'>
    <button>Add apple to my cart</button>
  </stone-cart-add-btn>
```

**This element doesn't:**

 - provide any HTML structure for a shopping cart. People use different front-end frameworks, therefore, it doesn't make any sense to couple this element with any of them.
 - provide any mechanism to store items of a shopping cart. Shopping cart synchronization can be developed in a number of different ways, therefore, it depends on an application.
 - work with a currency. There are [other elements](https://customelements.io/search/currency) providing such functionality.

## Usage



## Development

```
$ polyserve
```

## Testing

Install:

```
$ npm install -g web-component-tester
```

Run tests:

```
$ wct
```

## Build for production

Install:

```
$ npm install -g polybuild
```

Run:

```
$ polybuild stone-cart.html
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
