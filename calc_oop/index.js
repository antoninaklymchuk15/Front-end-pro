function createCalculator(base) {
  this.base = base;
  this.result = base;

  this.add = function (value) {
    if (this.isNumber(value)) {
      this.result += value;
    }
  };

  this.sub = function (value) {
    if (this.isNumber(value)) {
      this.result -= value;
    }
  };

  this.set = function (value) {
    if (this.isNumber(value)) {
      this.result = value;
    }
  };

  this.get = function () {
    return this.result;
  };

  this.reset = function () {
    this.result = this.base;
  };

  this.isNumber = function (value) {
    return !isNaN(value) && typeof value === "number";
  };

  return this;
}

const calculator = new createCalculator(100);

calculator.add(10);
calculator.add(10);
calculator.sub(20);
calculator.set(20);
calculator.add(10);
calculator.add(10);
calculator.add("qwe");
console.log(calculator.get());

calculator.reset();
console.log(calculator.get());
