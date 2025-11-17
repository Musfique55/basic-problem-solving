type args = string | number | boolean;

const formatValue = (value: args) : args => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

const getLength = <T>(val: string | T[]) : number => {
  return typeof val === "string" || Array.isArray(val) ? val.length : 0;
};

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name : ${this.name}, Age : ${this.age}'`;
  }
}

type item = {
  title: string;
  rating: number;
};

const filterByRating = (items: item[]): item[] => {
  return items.filter((item) => item.rating >= 4);
};

type user = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: Array<user>) : user[] => {
  return users.filter((user) => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
};

type arr = (string | number)[];

const getUniqueValues = (arr1: arr, arr2: arr): arr => {
  const visited = {} as { [key: string]: boolean };

  const uniqueValues: arr = [];

  for (const num of arr1) {
    if (!visited[num]) {
      uniqueValues.push(num);
      visited[num] = true;
    }
  }
  for (const num of arr2) {
    if (!visited[num]) {
      uniqueValues.push(num);
      visited[num] = true;
    }
  }

  return uniqueValues;
};

interface product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products : product[]) : number => {
    return products.reduce((prev,curr) => prev + (curr.price * curr.quantity) ,0);
}


