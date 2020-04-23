// Так. Письмова таска.
// Зробити свій розпоряжок дня.
//
// Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
// Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
// Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не
// успішне виконання.
// Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
//
// Тобто, як приклад
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави -
// Працюєте - Поїхали до дому - Повчились - Лягли спати.
//
// Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант, що при виконанні функції
// aдоїхати на роботу ви стали в заторі і не попали на роботу. Або йдучи на обід ви забули гаманець і лишились голодні.

let random = function () {
    let x = Math.random();
    return x + 0.3
}

// //BY PROMISE
//
// function wakeUp() {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             if (random() > 0.3) {
//                 console.log('Pora prokidatis')
//                 resolve(true)
//             } else {
//                 console.log('Siogodni vihidnii, mojna pospati')
//
//
//             }
//         }, 2000)
//     })
// }
//
// wakeUp()
//
//     .then(() => {
//         return new Promise((resolve, reject) => {
//             setTimeout(function () {
//                 if (random() > 0.5) {
//                     console.log('chistim zubi')
//                     resolve(true)
//                 } else console.log('zubna pasta kinchilas,sidim doma')
//             }, 2000)
//         })
//     })
//     .then(() => {
//         return new Promise((resolve, reject) => {
//             setTimeout(function () {
//                 if (random() > 0.5) {
//                     console.log('snidaem')
//                     resolve(true)
//                 } else console.log('Nema sho eat, tomu sidimo hungry')
//             }, 2000)
//         })
//     })
//     .then(function () {
//         return new Promise((resolve, reject) => {
//             setTimeout(function () {
//                 if (random() > 0.5) {
//                     console.log('Odiagaemos')
//                     resolve(true)
//                 } else console.log('mojna zalipnuti v serialchiki')
//             }, 2000)
//         })
//     })
//     .then(function () {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (random() > 0.5) {
//                     console.log('Sidaem na rover i pognali na galeri')
//                     resolve(true)
//                 } else console.log('Mojna shoditi v magaz kupiti pivko i jantarna s persem')
//             }, 1500)
//         })
//     })
//     .then(() => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (random() > 0.5) {
//                     console.log('stvoruem robochii viglad, posmihaemos')
//                     resolve(true)
//                 } else console.log('Drink pivko divimosia serial')
//             }, 1200)
//         })
//     })
//     .then(value => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log('idem na perekur')
//                 resolve(true)
//             }, 1500)
//         })
//     })
//     .then(() => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (random() > 0.5) {
//                     console.log('stvoruem robochii viglad, posmihaemos')
//                     resolve(true)
//                 } else console.log('perepisuemos v telegram')
//             }, 1500)
//         })
//     })
//     .then(value => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (random() > 0.5) {
//                     console.log('Idem obidati')
//                     resolve(true)
//                 } else console.log('mojna pohavati')
//             }, 1000)
//         })
//     })
//     .then(value => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (random() > 0.5) {
//                     console.log('vertaemsia do roboti')
//                     resolve(true)
//                 } else console.log('teper posluhae music')
//             }, 2300)
//         })
//     })
//     .then(value => {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 if (random() > 0.5) {
//                     console.log('Vertaemsia dodomu, vecheriaem, lagaem spati')
//                 } else console.log('mojna lagati spati')
//             }, 1777)
//         })
//     })
//     .catch(reason => {
//         console.log(reason)
//     })

// BY CALLBACK

let money = 500; //Berem z soboju zranku ${money} griven.

let vakeUp = function () {
    setTimeout(function () {
        console.log('Prokidaemos, miemos,briemos,snidaem')
        goWork()
    }, 2777)

}

let goWork = function (cb) {
    setTimeout(function () {
        if (money >= 8) {
            money -=8
            console.log('sidaem na marshrytku odem na robotu')
            workHard()
        } else {
            console.log('Idem na pobotu pishkom bo nema groshey')
            workHard()
        }


    }, 2000)
}

let workHard = function () {
    setTimeout(function () {
        if (money > 100500) {
            console.log('Mojna halturiti,groshei dostatnio, bilse ne treba')
        } else console.log('Treba arbaiten, treba zarobliati')
    }, 2000)
}

vakeUp();