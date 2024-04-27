const calculator = {
  displayValue: "",
  operator: null,
  firstOperand: null,

  appendNumber(number) {
    this.displayValue += number;
    document.getElementById("result").value = this.displayValue;
  },

  appendOperator(operator) {
    if (this.operator === null) {
      this.firstOperand = this.displayValue;
      this.displayValue += operator;
      this.operator = operator;
    } else {
      this.displayValue =
        this.firstOperand + " " + this.operator + " " + this.displayValue;
      this.operator = operator;
    }
    document.getElementById("result").value = this.displayValue;
  },

  clearDisplay() {
    this.displayValue = "";
    this.operator = null;
    this.firstOperand = null;
    document.getElementById("result").value = "";
  },

  calculate() {
    const secondOperand = parseFloat(this.displayValue.split(this.operator)[1]);
    let result;

    switch (this.operator) {
      case "+":
        result = parseFloat(this.firstOperand) + secondOperand;
        break;
      case "-":
        result = parseFloat(this.firstOperand) - secondOperand;
        break;
      case "*":
        result = parseFloat(this.firstOperand) * secondOperand;

        break;
      case "/":
        result = parseFloat(this.firstOperand) / secondOperand;
        break;
      default:
        result = "Error";
    }

    this.displayValue = result;
    this.operator = null;
    this.firstOperand = null;
    document.getElementById("result").value = result;
  },
  backspace() {
    this.displayValue = this.displayValue.slice(0, -1);
    document.getElementById("result").value = this.displayValue;
  },
};
