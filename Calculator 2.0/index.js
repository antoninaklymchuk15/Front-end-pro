const operators = ["+", "-", "/", "*"];
let num1Conv;
let num2Conv;
let result;
let expression;

const operation = getOperator();
getNumber();
if (areValuesValid()) {
  const [calcResult, calcExpression] = calculate(operation);
  showResult(calcExpression, calcResult);
}

function getOperator() {
  let operation = prompt("Please choose operation: +, -, *, / ", "");
  return operation;
}

function getNumber() {
  let num1 = prompt("Enter the first number", "");
  let num2 = prompt("Enter the second number", "");
  num1Conv = Number(num1);
  num2Conv = Number(num2);
}

function areValuesValid() {
  if (isNaN(num1Conv) || isNaN(num2Conv) || !operators.includes(operation)) {
    alert("Invalid values have been inputed");
    return false;
  }
  return true;
}

function calculate(operation) {
  switch (operation) {
    case "+":
      result = num1Conv + num2Conv;
      expression = `${num1Conv} + ${num2Conv}`;
      break;
    case "-":
      result = num1Conv - num2Conv;
      expression = `${num1Conv} - ${num2Conv}`;
      break;
    case "*":
      result = num1Conv * num2Conv;
      expression = `${num1Conv} * ${num2Conv}`;
      break;
    case "/":
      result = num1Conv / num2Conv;
      expression = `${num1Conv} / ${num2Conv}`;
      break;
  }
  return [result, expression];
}

function showResult(expression, result) {
  alert(`Result: ${expression} = ${result}`);
}
