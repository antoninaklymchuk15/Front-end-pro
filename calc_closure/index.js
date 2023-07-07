function createCalculator(base) {
  let result = base;

  function add(value) {
    if (typeof value === "number") {
      result += value;
    }
  }

  function sub(value) {
    if (typeof value === "number") {
      result -= value;
    }
  }

  function set(value) {
    if (typeof value === "number") {
      result = value;
    }
  }

  

  function get() {
    return result;
  }

  function reset() {
    result = base;
  }

  return {
    add,
    sub,
    set,
    get,
    reset,
  };
}

const calculator = createCalculator(100);

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
