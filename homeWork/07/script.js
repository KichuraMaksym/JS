// // - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let text = document.createElement("div");
// text.innerText = 'Testovij tekst';
// document.body.appendChild(text);
// text.id = 'text';
// let hide = document.getElementById('text')
// let knopka = document.createElement('button')
// knopka.innerText = 'hider'
// document.body.appendChild(knopka)
// knopka.id = 'ad1'
// knopka.style.background = 'gray'
// let knopka1 =document.getElementById('ad1')
// knopka1.onclick = function f() {
//     hide.style.display = 'none'
// }


// // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let botton = document.createElement('button')
// botton.innerText = 'Hide me'
// document.body.appendChild(botton)
// botton.onclick = function () {
//  botton.hidden = true
// }


// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let vik = document.createElement('input')
// document.body.appendChild(vik)
// let knopka = document.createElement('button')
// knopka.innerText = 'Aga test'
// document.body.appendChild(knopka);
// knopka.onclick = function () {
//     if (vik.value < 18) {
//         alert('You are under 18')
//         vik.value = ''
//     }
//     if (vik.value >= 18) {
//         alert('You are legal')
//         vik.value = ''
//     }
// }


// // - Создайте меню, которое раскрывается/сворачивается при клике
// let ul = document.createElement("ul");
// ul.innerText = 'show/hide button'
// let li1 = document.createElement("li");
// li1.innerText = 'menu1';
// let li2 = document.createElement("li");
// li2.innerText = 'menu2';
// let li3 = document.createElement("li");
// li3.innerText = 'menu3';
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// document.body.appendChild(ul);
// li1.style.display = 'none';
// li2.style.display = 'none';
// li3.style.display = 'none';
// ul.onclick = function (ev) {
//     if (li2.style.display === 'none') {
//         li2.style.display = 'block'
//     } else li2.style.display = 'none';
//     if (li1.style.display === 'none'){
//         li1.style.display = 'block'
//     }else li1.style.display = 'none';
//     if (li3.style.display === 'none'){
//         li3.style.display = 'block'
//     }else li3.style.display = 'none'
//
// }


// // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// let comList = [{title:'title1',body:'comment nambe 1'},{title:'title2',body:'comment nambe 2'},{title:'title3',body:'comment nambe 3'},{title:'title4',body:'comment nambe 4'},{title:'title5',body:'comment nambe 5'},]
//
// // Вывести список комментариев в документ, каждый в своем блоке.
// //  Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// for (let i = 0; i < comList.length; i++) {
//     let div = document.createElement('div');
//     div.innerText = JSON.stringify(comList[i]);
//     let knopka = document.createElement("button");
//     knopka.innerText = 'Hide';
//     document.body.appendChild(div);
//     div.appendChild(knopka)
//     knopka.onclick = function (e) {
//         console.log(e);
//         div.style.display = 'none'
//     }
// }


// // - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// // Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let knopka = document.getElementById('knopka')
// knopka.onclick = function (ev) {
//     console.log(document.form1.text1.value);
//     console.log(document.form1.text2.value);
//     console.log(document.form2.text1.value);
//     console.log(document.form2.text2.value);
// }


// // - Створити функцію, яка генерує таблицю.
// // Перший аргумент визначає кількість строк.
// // Другий параметр визначає кліькіть ячеєк в кожній строці.
// // Третій параметр визначає елемент в який потрібно таблицю додати.
// let tableCreator = function (row, collomn, el) {
//     let target = document.getElementById(el)
//     let tbl = document.createElement("table");
//     for (let i = 0; i < row; i++) {
//         let tr = document.createElement("tr")
//         tbl.appendChild(tr)
//         for (let j = 0; j < collomn; j++) {
//             let td = document.createElement("td")
//             tr.appendChild(td)
//
//         }
//     }
//
//     target.appendChild(tbl)
// }
//
// tableCreator(2, 3, 'target');


// // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// // При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)
// let inp1 = document.createElement('input');
// inp1.placeholder = 'row'
// let inp2 = document.createElement('input');
// inp2.placeholder = 'cells'
// let inp3 = document.createElement('input');
// inp3.placeholder = 'cellValue'
// let btn = document.createElement("button");
// btn.innerText = 'Creata Table'
// document.body.appendChild(inp1);
// document.body.appendChild(inp2);
// document.body.appendChild(inp3);
// document.body.appendChild(btn);
// btn.onclick = function (ev) {
//     let row1 = (inp1.value);
//     let row = parseInt(row1);
//     let cells1 = (inp2.value);
//     let cells = parseInt(cells1)
//     let cellValue = inp3.value;
//     console.log(row);
//     console.log(cells)
//     console.log(cellValue)
//     let tbl = document.createElement("table");
//     for (let i = 0; i <row; i++) {
//         let tr = document.createElement("tr");
//         tbl.appendChild(tr)
//         for (let j = 0; j < cells; j++) {
//             let td = document.createElement("td");
//             td.style.background = 'red'
//             td.innerText = cellValue;
//             tr.appendChild(td)
//         }
//     }
//     document.body.appendChild(tbl)
// }


// // - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
// let imgArr = ['https://aeroclub.net.ua/content/events/500/300safety-day-img.jpg', 'https://imarket33.com/wp-content/uploads/2019/08/112.0.1-IMG-300x300.jpg', 'https://www.nasa.gov/sites/default/files/files/nasa_insignia_300.jpg'];
// let carusel = document.createElement("div")
// document.body.appendChild(carusel);
// let imgIndex = 0;
// lBtn = document.createElement("button");
// let rBtn = document.createElement("button");
// lBtn.innerText = 'left';
// rBtn.innerText = 'right';
// let imgToSee = document.createElement("img");
// imgToSee.src = imgArr[imgIndex]
// document.body.appendChild(imgToSee)
// document.body.appendChild(lBtn);
// document.body.appendChild(rBtn);
// lBtn.onclick = function (ev) {
//     if (imgIndex - 1 < 0) {
//         imgIndex = imgArr.length - 1
//     } else imgIndex = imgIndex - 1
//     imgToSee.src = imgArr[imgIndex]
// }
// rBtn.onclick = function (ev) {
//     if (imgIndex + 1 > imgArr.length -1) {
//         imgIndex = 0
//     } else imgIndex = imgIndex + 1
//     imgToSee.src = imgArr[imgIndex]
// }


// // // Сворити інпут текстового типу.
// // // Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// // // кинути алерт з попередженням.
// // // - Сворити масив не цензцрних слів.
// // // Перевірку робити при натисканні на кнопку
//
// let badWords = ['paskuda','suka','ueban']
// let input = document.createElement("input" )
// input.id = 'mat';
// document.body.appendChild(input)
// let but = document.createElement("button")
// document.body.appendChild(but)
// but.innerText = 'enter'
// but.onclick = function () {
//     for (const badWord of badWords) {
//         if (badWord === input.value ){
//             alert('Ne materis gavniuk')
//         }
//     }
// }


// // Сворити інпут текстового типу.
// // - Сворити масив не цензцрних слів.
// // Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// // Кинути алерт з попередженням у випадку якщо містить.
// // Перевірку робити при натисканні на кнопку
// let badWords = ['paskuda','suka','ueban']
// let input = document.createElement("input" )
// input.id = 'mat';
// document.body.appendChild(input)
// let but = document.createElement("button")
// document.body.appendChild(but)
// but.innerText = 'enter'
// but.onclick = function () {
//     for (const badWord of badWords) {
//         if (badWord === input.value || input.value.includes(badWord)){
//             alert('Ne materis gavniuk')
//         }
//     }
// }


// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
let zagolovki = document.getElementsByTagName('h2')
const zmist = document.createElement('ul')
document.body.appendChild(zmist)
for (let i = 0; i < zagolovki.length; i++) {
    let ssilka = document.createElement('a')
    let zagol = document.createElement('li')
    let yacor = 'yacor' + 1;
    ssilka.href = '#' + yacor;
    zagolovki[i].setAttribute('id',yacor)
    ssilka.innerHTML = zagolovki[i].innerText
    zagol.appendChild(ssilka)
    zmist.appendChild(zagol)
}


// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ





//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// // *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// document.onmouseup = function () {
//
//     let selection = window.getSelection();
//     let indexBefore = selection.anchorOffset
//     let indexAfter = selection.focusOffset;
//     alert(selection)
//     alert(`start at ${indexBefore} end at ${indexAfter}`)
//     let span1 = '<span>';
//     let span2 = '</span>';
//     selection.anchorNode
//     console.log(selection);
//     console.log(selection.anchorNode);
//     console.log(selection.focusNode);
// }


// https://learn.javascript.ru/selection-range