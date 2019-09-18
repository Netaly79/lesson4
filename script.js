//script 1 ET=5min   AT=7min
/*1.	Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
 Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert. */

let arr=[1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
let sum=0;

 for (let i=0; i<arr.length; i++)
 {
    if (parseInt(arr[i]))
    {
        sum+=parseInt(arr[i]);
        console.log(sum);
    }
 }
 alert(sum);

//script 2 ET=10min   AT=10min
/*2.	Сгенерируйте массив из n случайных чисел с двумя знаками после запятой. 
Переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень,
не используя функцию Math.pow().*/

let n= +prompt("number");
let randomArr=[];
for (let y=0; y<n; y++)
{
    randomArr.push(Math.random().toFixed(2));
}
for (let y=0; y<n; y++)
{
    console.log(randomArr[y]**5);
}

//script 3 ET=10min   AT=10min
/*3.	Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
a.	Добавьте в начало массива значение ‘Backbone.js’
b.	Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
c.	Добавьте в массив значение ‘CommonJS’ вторым элементом
d.	Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”
*/

let jsArr=['AngularJS', 'jQuery'];
jsArr.unshift('Backbone.js');
jsArr.push('ReactJS');
jsArr.push('Vue.js');
jsArr.splice(1,0,'CommonJS');
alert(`${jsArr.splice(jsArr.indexOf('jQuery'),1)} - Это здесь лишнее`);

//script 4 ET=20min   AT=15min
 /*4.	Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’. 
 Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью любых 
 методов массива (indexOf, splice ...). Затем объедините элементы массива в строку 
 и выведите в alert исходный и итоговый варианты.*/

 let firstString="Как однажды Жак звонарь сломал фонарь головой";
 let SubStringArr=[];
 SubStringArr=firstString.split(' ');
 let removed=SubStringArr.splice(4,2);
 SubStringArr.splice(5,0,removed[0], removed[1]);
 let endString="";
 for (let i=0; i<SubStringArr.length; i++)
 {
     endString+=SubStringArr[i];
     endString+=" ";
 }
 alert (`${firstString} -- ${endString}`);

 //script 5 ET=5min   AT=7min
 /*5.	Создайте ассоциативный массив person, описывающий персону, с произвольным количеством 
 произвольных полей. С помощью оператора in или typeof проверьте наличие в объекте свойства,
  прочитанного из prompt, и выведите его на экран. Если свойства нет, 
  то добавляйте его в объект со значением, которое также запрашивается из prompt.*/

  let person ={
      "firstName":"Vasya",
      "lastName":"Petrov",
      age:40,
      hasChild:true
    };

    let key=prompt("Ender key");
    let found=false;
    for (let sKey in person)
    {
        if (sKey===key){
            alert(`key - ${key} value - ${person[key]}`);
            found=true;
        }      
    }
    if(!found)
    {
        let value=prompt("Enter value");
        person[key]=value;
    }
 /* script 6 ET=2min   AT=2min
  6.	Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, 
 прочитанными из prompt (например: brand, model, resolution, color...), не используя 
 вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее. 
 */

 let phone={};
 for (let i=0; i<3; i++)
 phone[prompt("key")]=prompt("value");

 person.modelPhone=phone;
 console.log (person);

/* script 7 ET=10min   AT=20min
 7.	Создайте объект dates для хранения дат. Первая дата – текущая, new Date. 
 Вторая дата – текущая дата минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. 
 Проверьте, попадает ли введенная дата в диапазон дат объекта dates.
 */
let dates=[];
let today= new Date();
let yearAgo=new Date();
yearAgo.setFullYear(yearAgo.getFullYear()-1);
dates.push(today);
dates.push(yearAgo);

let userDate=new Date();
let v=(prompt("New date yyyy-mm-dd"));

let d= Date.parse(v);
userDate.setTime(d);

if (userDate<=dates[0]&&userDate>=dates[1])
console.log ("Входит в диапазон");
else
console.log (" Не входит в диапазон");

/* script 8 ET=5min   AT=5min
 8.	Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов,
  полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму 
  всех чисел массива и выведите в alert полученный результат.
 */

 let arr=[];
 let n=5, sum=0;
 for (let i=0; i<n; i++)
 {
     arr.push(prompt("value"));
 }
 for (let i=0; i<arr.length;i++)
 {
     let val=parseInt(arr[i]);
     if (val)
     {
         sum+=val;
     }
 }
 alert (`summa values ${arr} = ${sum}`);

 /* script 9 ET=5min   AT=8min
 9.	Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения
 */

 let mathArr=new Array(9);
 for (let i=0; i<9; i++){
     mathArr[i]=new Array(9);
    for (let y=0; y<9; y++)
    {
        let str=`${i+1}x${y+1}=${(i+1)*(y+1)}`;
        mathArr[i][y]=str;
    }
 }
 console.log (mathArr);

 /* script 10 ET=5min   AT=5min
 	10.	Создайте структуру данных, полностью описывающую html-разметку картинки
 */

 let img={
     "src":"https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
     "alt": "",
     "style":"border: 1px solid #ccc",
     "width":"200"
 };
 console.log (img);
