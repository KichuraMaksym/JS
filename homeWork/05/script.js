// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }
// ==============================================
function OpisTega(tagName, tagAction, tagAtributeName, tagAtributeAction, tagAtributeName2, tagAtributeAction2) {
    this.nazvaObjectu = tagName;
    this.dijaObjecru = tagAction;
    this.atributes = [{atribute: tagAtributeName, dijaAtributu: tagAtributeAction}, {
        atribute: tagAtributeName2,
        dijaAtributu: tagAtributeAction2
    }];

}

let a = new OpisTega('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок', 'href', 'Задает адрес документа, на который следует перейти.', 'target', 'Имя окна или фрейма, куда браузер будет загружать документ.');
console.log(a);


let div = new OpisTega('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', 'align', 'Задает выравнивание содержимого тега <div>.', 'title', 'Добавляет всплывающую подсказку к содержимому.');
console.log(div);


let h1 = new OpisTega('<h1>', 'Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, ', 'align', 'Определяет выравнивание заголовка.', 'id', 'Задает стилевой идентификатор — уникальное имя элемента, которое используется для изменения его стиля и обращения к нему через скрипты');


let span = new OpisTega('<span>', 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.', 'span', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.', 'style', 'Применяется для определения стиля элемента с помощью правил CSS.');


let input = new OpisTega('<input>', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', 'max', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', 'min', 'Нижнее значение для ввода числа или даты.');


let form = new OpisTega('<form>', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.', 'action', 'Адрес программы или документа, который обрабатывает данные формы.', 'method', 'Метод протокола HTTP.');


let option = new OpisTega('<option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей.', 'disable', 'Заблокировать для доступа элемент списка.', 'value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.');
console.log(option);

let select = new OpisTega('<select>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. ', 'autofocus', 'Устанавливает, что список получает фокус после загрузки страницы.', 'form', 'Связывает список с формой.');


// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }
// ==============================================
class OpisTag {
    constructor(tagName, tagAction, tag1Name, tag1Action, tag2Name, tag2Action) {
        this.nazva = tagName;
        this.shoRobit = tagAction;
        this.atributes = [
            {atribut1: tag1Name, dijaAtributu1: tag1Action},
            {atribut2: tag2Name, dijaAtributu1: tag2Action}
        ]
    }
}

let a2 = new OpisTag('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок', 'download', 'Предлагает скачать указанный по ссылке файл', 'title', 'Добавляет всплывающую подсказку к тексту ссылки');
console.log(a2);

let div2 = new OpisTag('some tag', 'some action', 'some tag name', 'some tag action', 'some tag name2', 'some tag action 2');
console.log(div2);

let h12 = new OpisTag('some tag', 'some action', 'some tag name', 'some tag action', 'some tag name2', 'some tag action 2');
console.log(h12);

let span2 = new OpisTag('some tag', 'some action', 'some tag name', 'some tag action', 'some tag name2', 'some tag action 2');

let input2 = new OpisTag('some tag', 'some action', 'some tag name', 'some tag action', 'some tag name2', 'some tag action 2');

let form2 = new OpisTag('some tag', 'some action', 'some tag name', 'some tag action', 'some tag name2', 'some tag action 2');

let option2 = new OpisTag('<option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ', 'label', 'Указание метки пункта списка.', 'selected', 'Заранее устанавливает определенный пункт списка выделенным.');
console.log(option2);

let select2 = new OpisTag('<select>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.', 'size', 'Количество отображаемых строк списка.', 'multiply', 'Позволяет одновременно выбирать сразу несколько элементов списка.')


// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
let car = {
    model: 'model1',
    virobnik: 'virobnik1',
    ricvipusku: 2002,
    maxshvidkist: 113,
    objemDviguna: 150,
    drive: () => {
        console.log(`їдемо зі швидкістю ${this.maxshvidkist} на годину`)
    },
    info: () => {
        console.log(`${this.model} ${this.maxshvidkist} ${this.objemDviguna} ${this.ricvipusku} ${this.virobnik} `)
    },
    increaseMaxSpeed: (newSpeed) => {
        this.maxshvidkist += newSpeed
    },
    changeYear: (newValue) => {
        this.ricvipusku = newValue
    },
    addDriver: (driver) => {
        this.driver = driver
    }
};


// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
function car2(model, brand, produceYear, maxSpead, horsePower) {
    this.model = model;
    this.virobnik = brand;
    this.rikVipusku = produceYear;
    this.maskimalnaShvidkist = maxSpead;
    this.obiemDviguna = horsePower;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maskimalnaShvidkist} на годину`)
    };

    this.info = function () {
        console.log(`Kruti persi z ${this.virobnik} vipustili svij ${this.model} v ${this.rikVipusku}. V siei liali dvilok z ${this.obiemDviguna} kinskimi silami, a maksimalna shvidkist stanovit ${this.maskimalnaShvidkist} kmph`)
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maskimalnaShvidkist += newSpeed
    };
    this.changeYear = function (newValue) {
        this.rikVipusku = newValue
    };
    this.addDriver = function (driver) {
        this.vodij = driver
    }

}


// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
class Car3 {
    constructor(model, brand, produceYear, maxSpead, horsePower) {
        this.model = model;
        this.virobnik = brand;
        this.rikVipusku = produceYear;
        this.maskimalnaShvidkist = maxSpead;
        this.obiemDviguna = horsePower
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maskimalnaShvidkist} на годину`)
    }

    info() {
        console.log(`Kruti persi z ${this.virobnik} vipustili svij ${this.model} v ${this.rikVipusku}. V siei liali dvilok z ${this.obiemDviguna} kinskimi silami, a maksimalna shvidkist stanovit ${this.maskimalnaShvidkist} kmph`)
    }

    increaseMaxSpeed(newSpeed) {
        this.maskimalnaShvidkist += newSpeed
    }

    changeYear(newValue) {
        this.rikVipusku = newValue
    }

    addDriver(driver) {
        this.vodij = driver
    }
}

let doodge = new Car3('chalanger', 'goodge', '1991', 217, 389);


// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
//
class Sindarella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize
    }
}

let princes1 = new Sindarella('vika', 18, 34);
let princes2 = new Sindarella('ira', 19, 35);
let princes3 = new Sindarella('olena', 23, 36);
let princes4 = new Sindarella('oksana', 21, 35);
let princes5 = new Sindarella('nastia', 12, 36);
let princes6 = new Sindarella('nadia', 14, 39);
let princes7 = new Sindarella('fiona', 19, 31);
let princes8 = new Sindarella('ksena', 34, 36);
let princes9 = new Sindarella('ivan', 27, 45);
let princes10 = new Sindarella('lolita', 24, 36);

let princesses = [princes1, princes2, princes3, princes4, princes5, princes6, princes7, princes8, princes9, princes10];


class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.rozmirTufelki = shoeSize
    }
}

let shreck = new Prince('Shreck',33,31);

for (const princes of princesses) {
    if (princes.footSize == shreck.rozmirTufelki){
        console.log(`Dlia prinsa ${shreck.name} pidhodit princesa ${princes.name}`)
    }
}


//
// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

function Popelushka(name,age,footSize) {
    this.name = name;
    this.age = age;
    this.footSize =footSize
}

let popelushka1 = new Popelushka('Alisa',21,30);
let popelushka2 = new Popelushka('Ivanka',21,33);
let popelushka3 = new Popelushka('Dureha',22,34);
let popelushka4 = new Popelushka('Koza',16,35);
let popelushka5 = new Popelushka('Dereza',21,36);
let popelushka6 = new Popelushka('Sterva',24,37);
let popelushka7 = new Popelushka('Gadia',21,38);
let popelushka8 = new Popelushka('Petrovich',14,34);
let popelushka9 = new Popelushka('Hrenova',32,35);
let popelushka10 = new Popelushka('Kek',11,60);

let bandaPopelushok = [popelushka1,popelushka2,popelushka3,popelushka4,popelushka5,popelushka6,popelushka7,popelushka8,popelushka9,popelushka10]


function PrinceAlik(name,age,rozmirShkara) {
    this.name= name;
    this.age = age;
    this.shueSize = rozmirShkara;

    this.poshukPopelushki = function (array) {
        for (const arrayElement of array) {
            if (arrayElement.footSize == this.shueSize){
                console.log(`prinsu ${this.name} pidhodit princessa ${arrayElement.name}`)
            }
        }

    }

}

let Alfred = new PrinceAlik('Alfred',25,30);
Alfred.poshukPopelushki(bandaPopelushok);

//commit test