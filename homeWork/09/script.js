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


//BY PROMISE

function wakeUp(isWorkDay) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (isWorkDay) {
                console.log('Pora prokidatis')
                let vstaem = true
                resolve(vstaem)
            } else {
                console.log('Siogodni vihidnii, mojna pospati')
                reject(false)
            }
        }, 2000)
    })
}

wakeUp(true)

    .then((vstaem) => {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                if (vstaem) {
                    console.log('chistim zubi')
                    let snidaem = true
                    resolve(snidaem)
                }
            }, 2000)
        })
    })
    .then((snidaem) => {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                if (snidaem) {
                    console.log('snidaem')
                    let Odiagaemos = true;
                    resolve(Odiagaemos)
                }
            }, 2000)
        })
    })
    .then(function (Odiagaemos) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                if (Odiagaemos) {
                    console.log('Odiagaemos')
                    let Odiagaemos = true
                    resolve(Odiagaemos)
                }
            }, 2000)
        })
    })
    .then(function (Odiagaemos) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Odiagaemos) {
                    console.log('Sidaem na rover i pognali na galeri')
                    let value = true
                    resolve(value)
                }
            }, 1500)
        })
    })
    .then((value) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (value) {
                    console.log('stvoruem robochii viglad, posmihaemos')
                    let value = true
                    resolve(value)
                }
            }, 1200)
        })
    })
    .then(value => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('idem na perekur')
                let value = true
                resolve(value)
            }, 1500)
        })
    })
    .then((value) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (value) {
                    console.log('stvoruem robochii viglad, posmihaemos')
                    let value = true
                    resolve(value)
                }
            }, 1500)
        })
    })
    .then(value => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (value) {
                    console.log('Idem obidati')
                    let value = true
                    resolve(value)
                }
            }, 1000)
        })
    })
    .then(value => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (value) {
                    console.log('vertaemsia do roboti')
                    let value = true
                    resolve(value)
                }
            }, 2300)
        })
    })
.then(value => {
    return new Promise(resolve => {
        setTimeout(()=>{
            if (value){
                console.log('Vertaemsia dodomu, vecheriaem, lagaem spati')
            }
        },1777)
    })
})
