# Stone cart

It is a simple [Polymer-based](https://www.polymer-project.org) element providing the logic for adding items to the shopping cart and managing them within it.

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

 - provide any HTML structure for the shopping cart. People use different front-end frameworks, therefore, it doesn't make any sense to couple this element with any of them.
 - provide any mechanism to store items of the shopping cart. Shopping cart synchronization can be developed in a number of different ways, therefore, it depends on an application.
 - work with the currency. There are [other elements](https://customelements.io/search/currency) providing such functionality.

## Demo

[Demo and documentation](http://dnesteryuk.github.io/stone-cart)

## Install

```
$ bower install stone-cart --save
```

## Usage

Add polyfill:

```html
<script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
```

Import custom element:

```html
<link rel="import" href="bower_components/stone-cart/stone-cart.html">
```

## Development

Install dependencies:

```
$ npm install -g bower polyserve
$ bower install
```

Launch [Polyserve](https://github.com/polymerlabs/polyserve):

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

## Update GitHub pages

Install dependencies:

```
$ npm install -g yo generator-polymer
```

Pull changes:

```
$ yo polymer:gh
```

## License

[MIT License](https://opensource.org/licenses/MIT)