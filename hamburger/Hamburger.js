function Hamburger({ price, callories }) {
  this.price = price;
  this.callories = callories;
}

Hamburger.prototype.addTopping = function ({ price, callories }) {
  this.price += price;
  this.callories += callories;
};

Hamburger.prototype.getPrice = function () {
  return this.price;
};

Hamburger.prototype.getCalories = function () {
  return this.callories;
};


Hamburger.SIZE_SMALL = {
  price: 50,
  callories: 20,
};

Hamburger.SIZE_MEDIUM = {
  price: 75,
  callories: 30,
};

Hamburger.SIZE_BIG = {
  price: 100,
  callories: 40,
};

Hamburger.TOPPING_CHEESE = {
  price: 10,
  callories: 20,
};

Hamburger.TOPPING_SALAD = {
  price: 20,
  callories: 5,
};
Hamburger.TOPPING_POTATO = {
  price: 15,
  callories: 10,
};
Hamburger.TOPPING_SEASONING = {
  price: 15,
  callories: 0,
};
Hamburger.TOPPING_MAYO = {
  price: 20,
  callories: 5,
};


