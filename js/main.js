let obj1 = {1: 'Понедельник', 2: 'Вторник', 3: 'Среда', 4: 'Четверг', 5: 'Пятница', 6: 'Суббота', 7: 'Воскресенье'};
let obj2 = {1: 'Monday', 2: 'Tiesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday', 7: 'Sunday'};

const buttonLang = document.querySelector('#lan');

let dateT = new Date();
let numberDate = dateT.getDay();

buttonLang.addEventListener('click', language);

function language() {
    if (document.getElementById('ru').checked==true)
    {
        document.getElementById('text').innerHTML = '<p style="text-decoration:underline">' + obj1[numberDate];
    }
    else
    {
        document.getElementById('text').innerHTML = '<p style="text-decoration:underline">' + obj2[numberDate];
        //console.log(obj[1]);
    }
};
/** 
let obj = {a: '1', b: '2', c: '3'};
let sum = (obj['a']+" "+ obj['b']+" "+obj['c']);
console.log(sum);
**/

/** let obj = {key1: 'a', key2: 'b', key3: 'c'};
console.log(obj.key1);
**/
/** let user = {name: 'Егор', surname: 'Бисярин', patronymic: 'Тимофеевич'};
console.log(user['surname'] + ' ' + user['name'] + ' ' + user['patronymic']);

let date = {year: '2020', month: '05', day: '22'};
console.log(date['year']+ '-' + date['month'] + '-' + date['day']);
**/

/** let year = dateT.getFullYear;
let month = dateT.getMonth;
console.log(year);
console.log(month);
**/
