
//fundamentals and the core of JS --------------------------------------------//

//Variables
var name = "Migo";
var age = 21;
var ages = 21.5;
var hasDriverLicence = true;
var empty = undefined;

console.log("name" + " type " + typeof name);
console.log("age" + " type " + typeof age);
console.log("ages" + " type " + typeof ages);
console.log("hasDriverLicence" + " type " + typeof hasDriverLicence);
console.log("empty" + " type " + typeof empty);

//Objects
var person = {
    name: "Dennis Jackson",
    age: 24,
    hasDriverLicence: false,
    dateOfBirth: "01/01/1998",
    address: {
        firstLine: "587",
        postalCode: "st888",
        country: "Japan"
    }
};
console.log(person);

console.log(person.name);
console.log(person.age);
console.log(person.hasDriverLicence);

console.log(Object.values(person));

console.log(JSON.stringify(person.address));

//Arrays
var names = ["Alex", "Maria", "Sam", "Daniel"];
console.log(names);
console.log(names[2]);
console.log(names.length);

//easy way to loop through an array
for (var n of names) {
    console.log(n);
}

names.forEach(function (n, index) {
    console.log(index * " - " + n);
});

//Arithmetic Operators
var addition = 5 + 5;
var subtraction = 3 - 90;
var division = 10 / 5;
var multiplication = 3 * 25;
var remainder = 5 % 2;

console.log(addition);
console.log(subtraction);
console.log(division);
console.log(multiplication);
console.log(remainder);

//Functions
function addNumbers(n1, n2) {
    console.log((n1 + n2) / 2)
}
addNumbers(10, 20)


function addNumber(n1, n2) {
    var result = n1 + n2;
    return result;
}

var result = addNumber(10, 20);
console.log(result);

var person = { name: "Anna", age: 20 };
console.log(Object.keys(person));
console.log(Object.values(person));

//more Functions
console.log("James Bond".toLowerCase());
console.log("James Bond".toUpperCase());
console.log("James Bond".endsWith());
console.log("James Bond".startsWith("James"));

//Loops
for (var i = 0; i <= 10; ++i) {
    console.log(i);
}
/*
var person = [
    { name: "Anny", age: 21 },
    { name: "Kim", age: 25 }
];

for (var i = 0; i <= person.length; i++) {
    console.log(person[i].name);
    console.log(person[i].age);
    console.log("-----------------");
}*/

var number = 0;

while (number < 5) {
    console.log(number);
    number += 4
}

var i = 0;
do {
    i++;
    console.log(i)
} while (i < 5);


//Break and Continue

var number = 0;

while (number < 5) {
    console.log(number);
    if (number == 2) {
        break;
    }
    number++;
}

var number = 0;

while (number < 5) {
    number++;

    if (number < 5) {
        continue;
    }
    console.log(number);
}

//if Statement

var person = {
    name: "Anna",
    age: 17
}

if (person.age >= 18) {
    console.log(person.name + " is an adult");
} else if (person.age == 17) {
    console.log(person.name + " is about to be an adult");
} else {
    console.log(person.name + " is not an adult");
}

//Switch statement
var person = {
    name: "Andy",
    age: 18
}

switch (person.age) {
    case 17:
        console.log(person.name + " is about to be an adult");
        break;
    case 18:
        console.log(person.name + " is an adult");
        break;
    default:
        console.log("we dont know.")
}


var person = {
    name: "Jason",
    age: 16
}

switch (true) {
    case (person.age == 17):
        console.log(person.name + " is about to be an adult");
        break;
    case (person.age >= 18):
        console.log(person.name + " is an adult");
        break;
    default:
        console.log(person.name + " is not an adult");
}

switch (new Date().getDay) {
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    default:
        console.log("I dont know");
}

//comparison and logical operators
console.log("Comparison Operators---------");
console.log(10 == 10);
console.log(10 < 10);
console.log(10 <= 10);
console.log(10 >= 10);
console.log(10 > 10);
console.log(10 != 10);
console.log(10 != 11);

console.log("Logical Operators------------");
console.log(10 == 10 && 20 == 20 && 100 == 100);
console.log(10 == 10 && 20 != 20);
console.log(20 == 30 || 10 == 10);
console.log(!(10 == 10));
console.log(!(10 == 20));


//type coercion and ===
console.log("with type coercion------------");
console.log(typeof 0 + " " + typeof false);
console.log(0 == false);

console.log(typeof "0" + " " + typeof false);
console.log("0" == false);

console.log(typeof 1 + " " + typeof "1");
console.log(1 == "1");

console.log("without type coercion------------");
console.log(typeof 0 + " " + typeof false);
console.log(0 === false);

console.log(typeof "0" + " " + typeof false);
console.log("0" === false);

console.log(typeof 1 + " " + typeof "1");
console.log(1 === "1");

//single vs double quotes and Semi column. Decide how to keep your code//

//Map | Filter | Reduce
console.log("[].map");
var map = [1, 2, 3, 4, 5].map(function (n) {
    return n * 2;
});
console.log(map);

console.log("[].filter");
var filter = [1, 2, 3, 4, 5, 10, 29, 200].filter(function (n) {
    return n % 2 == 0;
});
console.log(filter);

console.log("[].reduce");
var reduce = [1, 2, 3, 4, 5.].reduce(function (accumulator, current) {
    return accumulator + current;
})
console.log(reduce);

//Callbacks
function callbackExample(name, callback) {
    console.log(callback(name));
}

var callback = function (name) {
    return "Halo " + name;
}

callbackExample("Ricahrd Hammond", callback);


//Named Exports and/ Import-------------------//
import { add, divide, multiply, PI } from './maths.js';
console.log(add(2, 2));
console.log(divide(10, 2));
console.log(multiply(6, 2));
console.log(PI);

import * as Maths from './maths.js';
console.log(Maths.add(100, 15));
console.log(Maths.subtract(50, 10));
console.log(Maths.divide(10, 2));
console.log(Maths.multiply(8, 2));
console.log(Maths.PI);

//Default Exports/ Imports-----------------------//
import Animal from './Animal.js';
var animal = new Animal();
console.log(animal.getClassType());

//Variable Scope and Let keyword---------------//

//let keyword
for (let i = 0; i < 10; i++) {
    console.log(i)
}
//console.log(i);

//Const keyword--------------------------------//
const secondName = "Maria";
/*secondName = {};
secondName = 2;
*/
console.log(secondName);

const manager = {};
manager["mgrName"] = "Jeremy";
console.log(manager.mgrName);

const array = [];
array.push("Jeremy from array");
console.log(array);

//Template literals----------------------------//
const empName = "James";
const country = "Portugal";
const postalC = 4533;

console.log
    ("empName: " + empName + " Country: " + country + " PostalC: " + postalC);
console.log("empName ${empName} country ${country} postalC ${postalC}");


//Arrays and Spread operator Arrays------------//
const arrayOne = ["Andy", "Megan", "George"];
const arrayTwo = ["Skip", "Devon", "Morty"];

const concatArray = [...arrayOne, ...arrayTwo];

concatArray.forEach(function (employee) {
    console.log(employee)
});

const car = "Toyota";
const carToArray = [...car];
carToArray.forEach(function (letter) {
    console.log(letter);
});


const addNum = function (nbr1, nbr2, nbr3) {
    return nbr1 + nbr2 + nbr3;
}

const nmbrs = [1, 5, 10];
const additionnmr = addNum(...nmbrs);

console.log(additionnmr);

//spread operator objects-----------------------//
const address = {
    cityX: "Cape Town",
    countryX: "South-Africa",
    postCode: "7655"
};

const nameX = {
    firstName: "Sheldon",
    lastname: "Cooper"
};

const personX = { ...address, ...nameX };
console.log(JSON.stringify(personX, null, 2));

//Arrow Functions--------------------------------//
const hello = () => {
    const es6 = "ES6"
    return `Hello ${es6}`;
};

const powers =
    [1, 2, 3, 4, 5].map((number, index) => Math.pow(number, index));

const addX = (n1, n2) => n1 + n2;
const milesToKm = miles => miles * 1.6034;

console.log(hello());
console.log(powers);
console.log(addX(100, 100));
console.log(milesToKm(300));

//LEXICAL and this------------------------------//
const personY = {
    name: "Howard",
    cars: ["Honda", "Mazda"],
    toString: function () {
        this.cars.forEach(car => {
            console.log(`${this.name} has ${this.cars}`);
        });
    }
}
personY.toString();

//Enhanced Object Properties--------------------//
const pricePropName = "PRICE";

const calculator = (name, price) => {
    return {
        name,
        add(n1, n2) {
            return n1 + n2;
        },
        [pricePropName.toLowerCase()]: price
    }
}
const calc = calculator("casio", 19.99);
console.log(calc.name);
console.log(calc.add(20, 20));
console.log(calc.price);

//Array Descruturing------------------------------//
const namesX = ["Steward", "Cold", "Rahj", "Leonard", "John"];
// const steward = names[0];
// const cold = names[1];
// const rahj = names[2];
const [steward, , rahj, ...restOfNames] = namesX;
console.log(`${steward} ${rahj}`);
console.log(restOfNames);
console.log(restOfNames.length);

//Object Descruturing----------------------------//
const getUser = () => {
    return {
        nameZ: "Penny",
        surnameZ: "Speckerman",
        genderZ: "male",
        addressZ: {
            countryZ: "United States",
            cityZ: "Atlanta",
            postCodeZ: "WE90",
            fullAddress: {
                doorNumber: 49,
                street: "Geo st"
            }
        },
        ageZ: 23
    }
};

const user = getUser();
//const nameZ = user.nameZ;
//const ageZ = user.ageZ;
//const countryZ = user.addressZ.countryZ;
//const doorNumber = user.fullAddress.doorNumber;

//const { name, age, addressZ: {country : theCountry } } = user;
//const { address : { fullAdress : { doornumber : number } } } = user;
const { nameZ, ageZ, addressZ: { countryZ: theCountry },
    addressZ: { fullAddress: { doorNumber: numberZ } } } = user;


console.log(nameZ);
console.log(ageZ);
console.log(theCountry);
console.log(numberZ);

//Functional Default Parameters----------------//
const calculatePay = (yearSalary, bonus = {
    teamBonus: 0,
    employeeBonus: 0
}) => {
    return yearSalary + bonus.teamBonus + bonus.employeeBonus;
}
console.log(calculatePay(22000, { teamBonus: 10000, employeeBonus: 6000 }));

//Classes-----------------------------------//
class AnimalX {
    constructor(nameI, ageI) {
        console.log(`${nameI} is an animal and was created`);
        this.nameI = nameI;
        this.ageI = ageI;
    }

    eat() {
        console.log(`${this.nameI} is eating`);
    }
    sleep() {
        console.log(`${this.nameI} is sleeping`);
    }
    wakeUp() {
        console.log(`${this.nameI} is waking up`);
    }
    logAge() {
        console.log(`${this.nameI} is ${this.ageI} years old`)
    }
}

const jeremy = new AnimalX("Jeremy", 2);
jeremy.eat();
jeremy.sleep();
jeremy.wakeUp();
jeremy.eat();
jeremy.logAge();

console.log("-------------------");

const clarkson = new AnimalX("Clarkson", 3);
clarkson.eat();
clarkson.sleep();
clarkson.wakeUp();
clarkson.eat();
clarkson.logAge();
console.log("-------------------");

//classes inheritance----------------------//
class AnimalE {
    constructor(nameE, ageE) {
        console.log(`${nameE} is an animal and was created`);
        this.nameE = nameE;
        this.ageE = ageE;
    }

    //STATIC MEHODS
    static iamStaticMethod() {
        console.log("I am a static method inside of animal class")
    }

    eat() {
        console.log(`${this.nameE} is eating`);
    }
    sleep() {
        console.log(`${this.nameE} is sleeping`);
    }
    wakeUp() {
        console.log(`${this.nameE} is waking up`);
    }
    logAge() {
        console.log(`${this.nameE} is ${this.ageE} years old`)
    }
}

class Dog extends AnimalE {
    constructor(nameE, ageE, breed) {
        super(nameE, ageE)
        this.breed = breed;
    }

    logBreed() {
        console.log(`${this.nameE} is a ${this.breed}`)
    }
    logAgeFromDog() {
        super.logAge();
    }
}

AnimalE.iamStaticMethod();

const james = new Dog("James", 4, "Bulldog");
james.logBreed();
james.logAgeFromDog();

console.log("-------------------");

class Cat extends AnimalE {
    constructor(nameE, ageE) {
        super(nameE, ageE)
    }

    logAgeFromCat() {
        super.logAge();
    }
}

const oreo = new Cat("Oreo", 5);
oreo.logAgeFromCat();
oreo.eat();
oreo.sleep();
oreo.wakeUp();
oreo.logAge();

console.log("--------------------");

//Promises-------------------------------------//
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("data back from the server");
    }, 1000);

    setTimeout(() => {
        reject("no data back from the server, there was an error!");
    }, 2000);
});

promise.then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
/*
//----------------------------------------//
const namesPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["Bernadette", "Jenny", "Leonard", "Scott", "Cole"]);
    }, 3000);

    setTimeout(() => {
        reject("no data back from the server, there was an error!");
    }, 5000);
});

const surnamePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["East", "Scoop", "Hofstadder", "Post", "Lone"]);
    }, 3000);

    setTimeout(() => {
        reject("no data back from the server, there was an error!");
    }, 5000);
});

Promise.all([namesPromise, surnamePromise]).then(data => {
    const [namesZ, surnamesZ] = data;
    for (var i = 0; i < namesZ.length; i++) {
        const nameZ = namesZ[i];
        const surnameZ = surnamesZ[i];
        console.log(`${nameZ} ${surnameZ}`);
    };
    console.log("--------------------");
}).catch(error => {
    console.log(error);
});
*/
/*
//Promises & Fetch API-------------------------DOWNLOAD BLUEBIRD---//
const getRandomUsers = n => {
    const fetchRandomUsers = fetch(`https://randomuser.me/api/?result${n}`)
    fetchRandomUsers.then(data => {
        data.json().then(randomUsers => {
            console.log(JSON.stringify(randomUsers.results.length));
            randomUsers.results.forEach(user => {
                const { gender, email } = user;
                console.log(`${gender} ${email}`);
            });
        })
    });
}
getRandomUsers(50);
*/

//Generators--------------------------------------//
const getNumbers = function* () {
    yield 1;
    yield "Hello";
    yield true;
    yield { name: "Alex" };
    return "I am done";
}

const numbersGen = getNumbers();
console.log(numbersGen.next().value);
console.log(numbersGen.next().value);
console.log(numbersGen.next().value);
console.log(JSON.stringify(numbersGen.next().value));
console.log(numbersGen.next().value);

/*
//------//
const getNumbersY = function* (numbersE) {
    for (var i = 0; i < numbersE.length; i++) {
        yield numbersE[i];
    }
}
const getNumbersGen = getNumbersY([1, 2, 3, 4, 5]);

const interval = setInterval(() => {
    const next = getNumbersGen.next();
    if (next.done) {
        console.log("this generator is done");
        clearInterval(interval);
        console.log("--------------------")
    }
    else {
        const numberY = next.value;
        console.log(numberY);
    }

}, 1000);
*/

//coroutine--------------Generators & Promises---//
/*import { coroutine as co } from 'bluebird';

const getRandomUsersX = n => {
    const fetchRandomUsers = fetch(` ${n}`)
    fetchRandomUsers.then(data => {
        data.json().then(randomUsers => {
            console.log(JSON.stringify(randomUsers.results.length));
            randomUsers.results.forEach(user => {
                const { gender, email } = user;
                console.log(`${gender} ${email}`);
            });
        })
    });
}
getRandomUsersX(50);
*/
/*
const getRandomUsersX = co(function* (n) {
    const fetchRandomUsers = yield fetch(` ${n}`)
    const data = yield fetchRandomUsers.json();
    return data;
});

getRandomUsersX(10).then(getRandomUsersX => {
    getRandomUsersX.result.forEach(user => {
        const {gender, email} = user;
        console.log(`${gender} ${email}`);
    });
}).catch(error => console.log);
*/

//Async Await----------------------//
/*
const logName = async (nameY) => {
    console.log(nameY);
    //1.we can yield promises using await
    const transformName = new Promise((resolve, reject) => {
        setTimeout(() => resolve(nameY.toUpperCase()), 500)
    });
    const result = await transformName;

    //2.return a promise
    return nameY;
}

logName("migo").then(res => {
    console.log("result from async function = " + res);
});
////////

const getRandomUsersY = async n => {
    try {
        const fetchRandomUsersY = await
            fetch(`https://randomuser.me/api/?result ${n}`);
        const data = await fetchRandomUsersY.json();
        data.results.forEach(user => {
            const { gender, email } = user;
            console.log(`${gender} - ${email}`);
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}

getRandomUsersY(2);
*/