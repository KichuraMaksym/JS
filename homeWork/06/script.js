// - создать массив с 20 числами.

let numArray = [2, 123, 213, 120, 345, 12, 0, -23, -34, 12, 2, 6, 80, 43, 23, 76, 940, 457, 531, -6543];


// // -- при помощи метода sort отсортировать массив.
//
// let sortArray = numArray.sort((a, b) => a - b);
// console.log(sortArray);

// // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
//
// function sortStep1(array,callback) {
//     callback(array);
//     console.log(array);
// }
//
// sortStep1(numArray,function (array) {
//     array.sort((a,b)=>a-b)
// });

// // -- при помощи filter получить числа кратные 3
//
// let filterArray = numArray.filter(value => value % 3 === 0);
// console.log(filterArray);
//

// // -- при помощи filter получить числа кратные 10
//
// let filterArray1 = numArray.filter(value => value % 10 === 0);
// console.log(filterArray1);
//

// // -- перебрать (проитерировать) массив при помощи foreach()
//
// let foreachArray = numArray.forEach((value, index, array) => {
//     console.log(`In our array by index ${index} we have number ${value}`)
// });

// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
//
// let mapArray = numArray.map(value => value = value*10);
// console.log(mapArray);
//
//

// - создать массив со словами на 15-20 элементов.

let wordArray = ["geeks", "for", "geeks", "a",
    "portal", "to", "learn", "can",
    "be", "computer", "science",
    "zoom", "yup", "fire", "in",
    "be", "data", "geeks", 'copypaste', 'from', 'geeksforgeeks.org'];

// // -- отсортировать его по алфавиту в восходящем порядке.
//
// let sortWord = wordArray.sort();
// console.log(sortWord);

// // -- отсортировать его по алфавиту  в нисходящем порядке.
//
// let sortWord1 = wordArray.sort((a, b) => {
//     if (a < b) {
//         return 1
//     } else {return -1}
// });
// console.log(sortWord1);

// // -- отфильтровать слова длиной менее 4х символов
//
// let filterWords = wordArray.filter(value => value.length < 4);
// console.log(filterWords);


// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
//
// let mapWords = wordArray.map(value => value+='!');
// console.log(mapWords);
//


// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [{name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {
    name: 'kolya',
    age: 29,
    status: true
}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {
    name: 'anya',
    age: 31,
    status: false
}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {
    name: 'masha',
    age: 30,
    status: true
}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true}];

// // - відсортувати його за  віком (зростання , а потім окремо спадання)
//
// let sortUsers = users.sort(((a, b) => a.age - b.age));
// console.log(sortUsers);
//
// let sortUsers1 = users.sort(((a, b) =>  b.age - a.age));
// console.log(sortUsers1);

// // - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//
// let sortUsers = users.sort((a, b) => a.name.length - b.name.length);
// console.log(sortUsers);
//
// let sortUser2 = users.sort((a,b)=>b.name.length - a.name.length);
// console.log(sortUser2);

// // - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// // - відсортувати його за індентифікатором
// let newArray = JSON.parse(JSON.stringify(users));
// let addId = newArray.map((value, index, array) => value.id = index + 1);
// let sortArray = newArray.sort((a, b) => b.id - a.id);
// console.log(users);
// console.log(sortArray);


// // -- наисать функцию калькулятора с 2мя числами и колбеком
//
// function calc(a, b, cb) {
//     console.log(cb(a, b));
// }
//
// calc(13, 117, function (a, b) {
//     return a + b
// });

// // -- наисать функцию калькулятора с 3мя числами и колбеком
//
// function calc2(a, b, c, cb) {
//     console.log(cb(a, b, c));
// }
//
// calc2(12, 13, 14, function (a, b, c) {
//     return a - b * a + c * b
// });

//
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
let cars = [{
    producer: "subaru",
    model: "wrx",
    year: 2010,
    color: "blue",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 400
}, {
    producer: "subaru",
    model: "legacy",
    year: 2007,
    color: "silver",
    type: "sedan",
    engine: "ez30",
    volume: 3,
    power: 250
}, {
    producer: "subaru",
    model: "tribeca",
    year: 2011,
    color: "white",
    type: "jeep",
    engine: "ej20",
    volume: 2,
    power: 300
}, {
    producer: "subaru",
    model: "leone",
    year: 1998,
    color: "yellow",
    type: "sedan",
    engine: "ez20x",
    volume: 2,
    power: 140
}, {
    producer: "subaru",
    model: "impreza",
    year: 2014,
    color: "red",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 200
}, {
    producer: "subaru",
    model: "outback",
    year: 2014,
    color: "red",
    type: "hachback",
    engine: "ej204",
    volume: 2,
    power: 165
}, {
    producer: "bmw",
    model: "115",
    year: 2013,
    color: "red",
    type: "hachback",
    engine: "f15",
    volume: 1.5,
    power: 120
}, {
    producer: "bmw",
    model: "315",
    year: 2010,
    color: "white",
    type: "sedan",
    engine: "f15",
    volume: 1.5,
    power: 120
}, {
    producer: "bmw",
    model: "650",
    year: 2009,
    color: "black",
    type: "coupe",
    engine: "f60",
    volume: 6,
    power: 350
}, {
    producer: "bmw",
    model: "320",
    year: 2012,
    color: "red",
    type: "sedan",
    engine: "f20",
    volume: 2,
    power: 180
}, {
    producer: "mercedes",
    model: "e200",
    year: 1990,
    color: "silver",
    type: "sedan",
    engine: "eng200",
    volume: 2,
    power: 180
}, {
    producer: "mercedes",
    model: "e63",
    year: 2017,
    color: "yellow",
    type: "sedan",
    engine: "amg63",
    volume: 3,
    power: 400
}, {
    producer: "mercedes",
    model: "c250",
    year: 2017,
    color: "red",
    type: "sedan",
    engine: "eng25",
    volume: 2.5,
    power: 230
}];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
let carFilter = cars.filter(value => value.volume >= 3);
// console.log(carFilter);

// - двигун = 2л

let carFilter2 = cars.filter(value => value.volume === 2);
// console.log(carFilter2);

// - виробник мерс
let carFilter3 = cars.filter(value => value.producer == "mercedes");
// console.log(carFilter3);

// - двигун більше 3х літрів + виробник мерседес
let carFilter4 = cars.filter(value => value.volume >= 3 & value.producer == "mercedes");
// console.log(carFilter4);

// - двигун більше 3х літрів + виробник субару

let carFilter5 = cars.filter(value => value.volume >= 3 & value.producer == "subaru")
// console.log(carFilter5);

// - сили більше ніж 300
let carFilter6 = cars.filter(value => value.power > 300);
// console.log(carFilter6);

// - сили більше ніж 300 + виробник субару
let carFilter7 = cars.filter(value => value.power > 300 && value.producer == "subaru");
// console.log(carFilter7);

// - мотор серіі ej
let carFilter8 = cars.filter(value => value.engine = "ej")
// console.log(carFilter8);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
let carFilter9 = cars.filter(value => value.power > 300 & value.producer == "subaru" & value.engine == 'ej');
// console.log(carFilter9);

// - двигун меньше 3х літрів + виробник мерседес
let carFilter10 = cars.filter(value => value.volume < 3 & value.producer == "mercedes");
// console.log(carFilter10);


// - двигун більше 2л + сили більше 250
let carFilter11 = cars.filter(value => value.volume > 2 & value.power > 250);
// console.log(carFilter11);

// - сили більше 250  + виробник бмв
let carFilter12 = cars.filter(value => value.power > 250 & value.producer == 'bmw');
// console.log(carFilter12);


//
//
//
// - взять слдующий массив
let usersWithAddress = [{
    id: 1,
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', street: 'Shevchenko', number: 16}
}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {
    id: 3,
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Lviv', street: 'Shevchenko', number: 121}
}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {
    id: 5,
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Lviv', street: 'Shevchenko', number: 115}
}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {
    id: 7,
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Lviv', street: 'Shevchenko', number: 22}
}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {
    id: 9,
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Lviv', street: 'Shevchenko', number: 12}
}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {
    id: 11,
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Lviv', street: 'Shevchenko', number: 121}
}];
// -- отсортировать его по id пользователей
let user1 = usersWithAddress.sort((a, b) => a.id - b.id)
// console.log(user1);

// -- отсортировать его по id пользователей в обратном опрядке
let user2 = usersWithAddress.sort((a, b) => b.id - a.id);
// console.log(user2);

// -- отсортировать его по возрасту пользователей
let user3 = usersWithAddress.sort((a, b) => a.age - b.age);
// console.log(user3);

// -- отсортировать его по возрасту пользователей в обратном порядке
let user4 = usersWithAddress.sort((a, b) => b.age - a.age);
// console.log(user4);

// -- отсортировать его по имени пользователей
let user5 = usersWithAddress.sort((a, b) => {
    if (a.name > b.name) {
        return 1
    } else if (a.name < b.name) {
        return -1
    }
    return 0
})
// console.log(user5);

// -- отсортировать его по имени пользователей в обратном порядке
let user6 = usersWithAddress.sort((a, b) => {
    if (a.name > b.name) {
        return -1
    }
    if (a.name < b.name) {
        return 1
    }
    return 0
})
// console.log(user6);

// -- отсортировать его по названию улицы  в алфавитном порядке
let user7 = usersWithAddress.sort((a, b) => {
    if (a.address.street > b.address.street) {
        return 1
    }
    if (a.address.street < b.address.street) {
        return -1
    }
    return 0
})
// console.log(user7);

// -- отсортировать его по номеру дома по возрастанию
let user8 = usersWithAddress.sort((a, b) => a.address.number - b.address.number)
// console.log(user8);

// -- отфильтровать (оставить) тех кто младше 30
let user9 = usersWithAddress.filter(value => value.age < 30);
// console.log(user9);

// -- отфильтровать (оставить) тех у кого отрицательный статус

let user10 = usersWithAddress.filter(value => value.status == false)
// console.log(user10);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
let user11 = usersWithAddress.filter(value => value.status == false & value.age < 30);
// console.log(user11);


// -- отфильтровать (оставить) тех у кого номер дома четный
let user12 = usersWithAddress.filter(value => value.address.number % 2 === 0)
// console.log(user12);

//
//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
let avtomobil = class {
    constructor(marka, potujnist, name, age, staj, price, produseYear) {
        this.brand = marka;
        this.power = potujnist;
        this.driver = {name: name, age: age, expirience: staj};
        this.price = price;
        this.produceYear = produseYear
    }
}
// Створити не менше 7 та не більше 20 машинок.

let car1 = new avtomobil('honda', 100500, 'Jackie Chan', 55, 33, 100500, 2002);
let car2 = new avtomobil('volvo', 10500, 'Mickey Ruork', 65, 45, 22000, 2020);
let car3 = new avtomobil('suzuki', 10050, 'Johny Deph', 35, 21, 3000, 2005);
let car4 = new avtomobil('Tavria', 56, 'Ivan Zadunajskiy', 25, 18, 700, 2007);
let car5 = new avtomobil('audi', 240, 'Sasha Belij', 15, 17, 15000, 2009);
let car6 = new avtomobil('subaru', 150, 'Fedor Bonfarchuk', 51, 15, 5400, 1997);
let car7 = new avtomobil('mistubishi', 190, 'Driver1', 52, 13, 2600, 1989);
let car8 = new avtomobil('linkoln', 280, 'Driver2', 33, 10, 4000, 2004);
let car9 = new avtomobil('dodge', 350, 'Driver3', 22, 8, 5200, 2001);
let car10 = new avtomobil('chevrolet', 90, 'Driver4', 44, 5, 3700, 2002);
let car11 = new avtomobil('pegeot', 175, 'Driver5', 27, 2, 13300, 2017);
let car12 = new avtomobil('fiat', 325, 'Driver6', 45, 1, 5000, 2013);

// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
let mycars = [];
mycars.push(car1, car2, car3, car4, car5, car6, car7, car8, car9, car10, car11, car12);
// console.log(mycars);
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
for (let i = 0; i < mycars.length; i += 2) {
    const carI = mycars[i];
    carI.power = carI.power * 1.1;
    carI.price = carI.price * 1.05
}
// console.log(mycars);
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
for (const mycar of mycars) {
    if (mycar.driver.age > 25 && mycar.driver.expirience < 5) {
        mycar.driver.expirience = mycar.driver.expirience + 1
    }
}
// console.log(mycars);
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
let allPrice = 0;
for (const mycar of mycars) {
    allPrice += mycar.price;

}
console.log(`Zagalna sina vsih mashin stanovit ${allPrice}`)

let allPriceForEach = 0;
mycars.forEach(value => {
    allPriceForEach =   allPriceForEach + value.price
} )
console.log(allPriceForEach);
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
let zadacha = function(array,a){

}




// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.


// ZADACHKA z callbackom
//
// function zadachka(p0, persent, aug, p, callback) {
//     console.log(callback(p0, persent, aug, p));
// }
//
// zadachka(1000, 2, 50, 1200, function (p0, persent, aug, p) {
//
//     let n = 0 ;
//     while (p0 <= p) {
//         p0 = p0 + (p0 * persent) / 100 + aug;
//         n++;
//     }
//     return `We nead ${n} yeaps to reach ${p} total population`
// });


//zadachka z rekursia

// year = 0;
// function f(p0, percent, aug, p) {
//     if (p0 <= p) {
//         p0 = p0 + (p0 * percent) / 100 + aug;
//         year = year + 1;
//         f(p0, percent, aug, p);
//         return year
//     }
// }
// console.log('We nead',f(1000, 2, 50, 1200),'years');


console.log(`test to commit`);





















