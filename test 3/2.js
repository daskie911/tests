const users = [
  { name: "John", age: 30 },
  { name: "Anna", age: 25 },
  { name: "Alice", age: 28 },
  { name: "Ivan", age: 24 },
  { name: "Bob", age: 23 },
  { name: "Michael", age: 30 },
  { name: "Taras", age: 22 },
  { name: "Lee", age: 29 },
  { name: "Emma", age: 27 },
  { name: "Late", age: 26 },
];

const users2 = [
  { name: "Bob", age: 20 },
  { name: "Emma", age: 28 },
  { name: "Liam", age: 25 },
  { name: "Olivia", age: 22 },
  { name: "William", age: 30 },
  { name: "Ava", age: 26 },
  { name: "James", age: 29 },
  { name: "Charlotte", age: 27 },
  { name: "Noah", age: 23 },
  { name: "Isabella", age: 24 },
  { name: "Benjamin", age: 21 },
  { name: "Sophia", age: 20 },
  { name: "Mason", age: 29 },
  { name: "Amelia", age: 25 },
  { name: "Ethan", age: 22 },
];

function combineUsers(users, users2) {
  const combinedUsers = [];
  for (let i = 0; i < users.length; i++) {
    combinedUsers.push(users[i]);
  }
  for (let i = 0; i < users2.length; i++) {
    combinedUsers.push(users2[i]);
  }
  for (let i = 0; i < combinedUsers.length; i++) {
    console.log(`Name: ${combinedUsers[i].name}`);
  }
  return combinedUsers;
}

console.log(combineUsers(users, users2));
