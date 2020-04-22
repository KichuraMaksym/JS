// // - Дана textarea.
// // В неё вводится текст.
// // Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// let text = document.createElement("textarea");
// document.body.appendChild(text)
// window.oninput = function (ev) {
//     localStorage.setItem('textKey',text.value)
// }
// if (text.value != null){
//     text.innerText = localStorage.getItem('textKey')
// }


// // - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// // Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// // Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// // Сделайте ваш скрипт как можно более универсальным.
// let text1 = document.getElementById('text1');
// text1.oninput = function(){
//     localStorage.setItem('text1',text1.value)
// }
// if (text1.value != null){
//         text1.value = localStorage.getItem('text1')
//     }
// let text2 = document.getElementById('text2');
// text2.oninput = function(){
//     localStorage.setItem('text2',text2.value)
// }
// if (text2.value != null){
//         text2.value = localStorage.getItem('text2')
//     }
// let text3 = document.getElementById('text3');
// text3.oninput = function(){
//     localStorage.setItem('text3',text3.value)
// }
// if (text3.value != null){
//         text3.value = localStorage.getItem('text3')
//     }
// let ta1 = document.getElementById('ta1')
// ta1.oninput =function(){
//     localStorage.setItem('ta1',ta1.value)
// }
// ta1.value = localStorage.getItem('ta1')
// let ta2 = document.getElementById('ta2')
// ta2.oninput = function() {
//     localStorage.setItem('ta2',ta2.value)
// }
// ta2.value = localStorage.getItem('ta2')
// let cb1 = document.getElementById('cb1')
// cb1.onclick = function(){
//     if (cb1.checked){
//         localStorage.setItem('cb1','on')
//     }else localStorage.setItem('cb1','off')
// }
// if (localStorage.getItem('cb1') === 'on'){
//     cb1.click()
// }
// let cb2 = document.getElementById('cb2')
// cb2.onclick = function(){
//     if (cb2.checked){
//         localStorage.setItem('cb2','on')
//     }else localStorage.setItem('cb2','off')
// }
// if (localStorage.getItem('cb2') === 'on'){
//     cb2.click()
// }
// let cb3 = document.getElementById('cb3')
// cb3.onclick = function(){
//     if (cb3.checked){
//         localStorage.setItem('cb3','on')
//     }else localStorage.setItem('cb3','off')
// }
// if (localStorage.getItem('cb3') === 'on'){
//     cb3.click()
// }
// let cb4 = document.getElementById('cb4')
// cb4.onclick = function(){
//     if (cb1.checked){
//         localStorage.setItem('cb4','on')
//     }else localStorage.setItem('cb4','off')
// }
// if (localStorage.getItem('cb4') === 'on'){
//     cb4.click()
// }
// let rb1 = document.getElementById('rb1')
// rb1.onclick = function () {
//     if (rb1.checked) {
//         localStorage.setItem('activeRb', 'rb1')
//     }
// }
// let rb2 = document.getElementById('rb2')
// rb2.onclick = function () {
//     if (rb2.checked) {
//         localStorage.setItem('activeRb', 'rb2')
//     }
// }
//
// let rb3 = document.getElementById('rb3')
// rb3.onclick = function () {
//     if (rb3.checked) {
//         localStorage.setItem('activeRb', 'rb3')
//     }
// }
//
// let rb4 = document.getElementById('rb4')
// rb4.onclick = function () {
//     if (rb4.checked) {
//         localStorage.setItem('activeRb', 'rb4')
//     }
// }
//
// let rb5 = document.getElementById('rb5')
// rb5.onclick = function () {
//     if (rb5.checked) {
//         localStorage.setItem('activeRb', 'rb5')
//     }
// }
//
// function chekRb() {
//     if (localStorage.getItem('activeRb') === 'rb1') {
//         rb1.click()
//     }
//     if (localStorage.getItem('activeRb') === 'rb2') {
//         rb2.click()
//     }
//     if (localStorage.getItem('activeRb') === 'rb3') {
//         rb3.click()
//     }
//     if (localStorage.getItem('activeRb') === 'rb4') {
//         rb4.click()
//     }
//     if (localStorage.getItem('activeRb') === 'rb5') {
//         rb5.click()
//     }
// }
// chekRb()


// // -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// // затем поредактировать их, затем еще поредактировать и возможно еще.....
// // Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// // Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт
// // истории - нажатеи кнопки сохранить).
// let left = document.createElement("img")
// left.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Arrow_Blue_Left_001.svg/200px-Arrow_Blue_Left_001.svg.png'
// left.style.width = '50px'
// document.body.appendChild(left)
// let right = document.createElement("img")
// right.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Arrow_Blue_Right_001.svg/200px-Arrow_Blue_Right_001.svg.png'
// right.style.width = '50px'
// document.body.appendChild(right)
// let br = document.createElement("br")
// document.body.appendChild(br)
// let textA = document.createElement("textarea")
// document.body.appendChild(textA)
// let butn = document.createElement("button");
// butn.innerText = 'Save'
// document.body.appendChild(butn)
//
// butn.onclick = function () {
//     let key = JSON.parse(localStorage.getItem('key'))
//     if (Array.isArray(key) && key != null) {
//         key.push(textA.value);
//         localStorage.setItem('key', JSON.stringify(key))
//     } else {
//         let emptyArr = [];
//         emptyArr.push(textA.value)
//         localStorage.setItem('key', JSON.stringify(emptyArr))
//     }
//
//     if (localStorage.getItem('key')) {
//     let lastKey = JSON.parse(localStorage.getItem('key')).length - 1
//     textA.value = JSON.parse(localStorage.getItem('key'))[lastKey]
//     let curentIndex = lastKey
//     right.onclick = function () {
//         if (curentIndex + 1 > lastKey) {
//             curentIndex = 0
//         } else curentIndex = curentIndex + 1
//
//         textA.value = JSON.parse(localStorage.getItem('key'))[curentIndex]
//     }
//
//     left.onclick = function () {
//         if (curentIndex - 1 < 0) {
//             curentIndex = lastKey
//         } else curentIndex = curentIndex - 1
//         textA.value = JSON.parse(localStorage.getItem('key'))[curentIndex]
//     }
//
// } else console.log('No data in array ')
// }




// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все
// необходимые инпуты для редактирования, которые уже заполнены данными объекта













