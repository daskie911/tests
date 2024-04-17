
const users = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Emma", age: 28 },
  { name: "Michael", age: 42 },
  { name: "Taras", age: 12 },
  { name: "Ivan", age: 72 },
  { name: "Anna", age: 32 },
  { name: "Lee", age: 61 },
  { name: "Late", age: 7 },
];

function averageAge(users) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18 && users[i].age <= 60) {
      sum += users[i].age;
      count++;
    }
  }
  return Math.round(sum / count);
}

console.log(`Average age of users aged 18 to 60: ${averageAge(users)}`);
