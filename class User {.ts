class User {
  constructor(name = "John", age = 30) {
    this.name = name;
    this.age = age;
  }
}
const user = new User();
//user.__proto__ ==> User.prototype;
user instanceof User; // => true
