// const s1 = `Hello world`;

// console.log(s1)

// const firstArr = [1, 2, 3];
// const secondArr = [4, 5, 6];
// const thirdArr = [...firstArr, ...secondArr];
// console.log(thirdArr);

// let myArr = ["Cuong", "Ha", "Hung"];
// myArr.push("new item");
// myArr = [...myArr, "cuong item"];
// myArr.unshift("first item");
// console.log(myArr);

// const test = { name: "cuong", address: "hanam" };
// console.log({ ...test });

// const myVehicle = {
//   brand: "Ford",
//   model: "Mustang",
//   color: "red",
// };

// const updateMyVehicle = {
//   type: "car",
//   year: 2021,
//   color: "yellow",
// };

// const update = { ...myVehicle, ...updateMyVehicle };
// console.log(update);

// function sum(x, y, z) {
//   return x + y + z;
// }
// const numbers = [1, 2, 3];
// console.log(sum(...numbers));

// const person = {name: "Cuong", age: 26, eyeColor: "Black"}
// const name = person.name;
// const age = person.age;
// console.log(name);
// console.log(age);

// const person = {name: "Cuong", age: 26, eyeColor: "Black"}
// const{age, name} = person;
// console.log(name);
// console.log(age);

// const city = ['Ha noi', 'da nang', 'Sai gon', 'Ha nam'];
// const [x,y,,z] = city;
// console.log(x,y,z);

// const x = 10;
// x > 5 ? console.log(`greater than 5 > 5`) : console.log(`Less than 5 < 5`)

// let user = {};

// console.log(user?.address?.street ?? "Not found user");

// let userAdmin = {
//   admin() {
//     alert("I am Cuong");
//   },
// };

// let userGuest = {};
// userAdmin.admin();
// userGuest.admin?.();

let obj = {
  name: "Cuong",
  chanel: "Onlyme",
  address: {
    street: "abc",
    province: "hangbai",
  },
};

console.log(obj?.address?.xyz?.def);

const test = undefined;
test.map?.((item) => item);
