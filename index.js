"use strict";

class User {
  constructor(name, email) {
    if (!name || !email) {
      throw new Error("User requires both a name and an email address.");
    }

    this.name = name;
    this.email = email;
  }

  describe() {
    return `${this.name} <${this.email}>`;
  }
}

class Student extends User {
  constructor(name, email, course) {
    super(name, email);
    this.course = course;
  }

  describe() {
    return `${super.describe()} studies ${this.course}.`;
  }
}

class BankAccount {
  #balance;

  constructor(owner, openingBalance = 0) {
    if (openingBalance < 0) {
      throw new RangeError("Opening balance cannot be negative.");
    }

    this.owner = owner;
    this.#balance = openingBalance;
  }

  deposit(amount) {
    this.#assertPositiveAmount(amount);
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    this.#assertPositiveAmount(amount);

    if (amount > this.#balance) {
      throw new RangeError("Insufficient balance.");
    }

    this.#balance -= amount;
    return this.#balance;
  }

  get balance() {
    return this.#balance;
  }

  #assertPositiveAmount(amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new TypeError("Amount must be a positive number.");
    }
  }
}

class Shape {
  area() {
    throw new Error("Subclasses must implement area().");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();

    if (!Number.isFinite(radius) || radius <= 0) {
      throw new TypeError("Radius must be a positive number.");
    }

    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();

    if (![width, height].every((value) => Number.isFinite(value) && value > 0)) {
      throw new TypeError("Width and height must be positive numbers.");
    }

    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

function runExamples() {
  const student = new Student(
    "Nischhal",
    "student@example.com",
    "JavaScript classes"
  );
  const account = new BankAccount(student.name, 1_000);
  const circle = new Circle(4);
  const rectangle = new Rectangle(6, 3);

  account.deposit(500);
  account.withdraw(250);

  console.log(student.describe());
  console.log(`Account balance: ${account.balance}`);
  console.log(`Circle area: ${circle.area().toFixed(2)}`);
  console.log(`Rectangle area: ${rectangle.area()}`);
}

runExamples();

module.exports = {
  User,
  Student,
  BankAccount,
  Shape,
  Circle,
  Rectangle,
};
