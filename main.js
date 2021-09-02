// 7.	צרו פונקציה שמדפיסה לחלון "hello there".

// function printHelloThere(){
//     document.write("hello there")
// }
// printHelloThere()

// 8.	צרו פונקציה שמדפיסה לחלון "hello there David".

// function printHelloDavid(){
//     document.write("hello david")
//     console.log("hello david");
// }

// printHelloDavid()

// 9.	צרו פונקציה שמקבלת מהמשתמש שם. הפונקציה מדפיסה לחלון "hello there". ואת השם 

// function printValueAndText(){
//     document.write(`${input1.value}hello`)
// }
// button1.onclick=function(){
//     printValueAndText()
// }

// 10.	צרו פונקציה שמקבלת מהמשתמש שם פרטי, שם משפחה וגיל. הפונקציה מדפיסה לחלון את הערכים שהתקבלו מהמשתמש.

// function printAllInput(){
//     document.write(`${input2.value},${input3.value},${input4.value}`)
// }
// send1.onclick=function(){
//     printAllInput()
// }

// 11.	צרו פונקציה שמקבלת מהמשתמש שם וגיל. הפונקציה מדפיסה ל div עם id שיצרתם ב HTML את הערכים שהתקבלו מהמשתמש.

// function printAllInput(){
//    div1.innerHTML+=(`${input2.value}${input3.value}${input4.value}`)
// }
// send2.onclick=function(){
//     printAllInput()
// }

// 12.	צרו פונקציה שמקבלת מהמשתמש שם פרטי, שם משפחה וגיל. הפונקציה מדפיסה ל div עם id שיצרתם ב HTML את הערכים שהתקבלו מהמשתמש, כל div בנפרד.

// function printAllInput(){
//    div4.innerHTML+=(`${input2.value}`)
//    div2.innerHTML+=(`${input3.value}`)
//    div3.innerHTML+=(`${input4.value}`)
// }
// send2.onclick=function(){
//     printAllInput()
// }

// 13.	צרו פונקציה שמקבלת מהמשתמש שם וגיל. הפונקציה מדפיסה לחלון את הערכים שהתקבלו מהמשתמש, המידע עטוף בתגית של div.

// function printNameANdAge(){
//     document.write(`<div>${age.value}${name1.value}</div>`)
// }
// send3.onclick=function(){
//     printNameANdAge()
// }


// 14.	צרו פונקציה שמקבלת מהמשתמש שם פרטי, שם משפחה וגיל. הפונקציה מדפיסה לחלון את הערכים שהתקבלו מהמשתמש, המידע עטוף בתגית של p שעטוף ב div.

// function printNameANdAge(){
//     document.write(`<div><p>${age.value}${name1.value}</p></div>`)
// }
// send3.onclick=function(){
//     printNameANdAge()
// }

// 15.	צרו פונקציה שמקבלת מהמשתמש שם פרטי, שם משפחה וגיל. הפונקציה מדפיסה לחלון את הערכים שהתקבלו מהמשתמש, המידע עטוף בתגית של p עם id.


// function printNameANdAge(){
//     document.write(`<div><p id="pi">${age.value}${name1.value}</p></div>`)
// }
// send3.onclick=function(){
//     printNameANdAge()
// }

// 17.	א. צרו פונקציה שמקבלת מהמשתמש שם פרטי. הפונקציה מדפיסה לחלון את השם שהתקבל מהמשתמש, המידע עטוף בתגית של p עם id.

// function printName2(){
//     document.write(`<p id="add">${name2.value}</p>`)
// }

// function addLastName(lastName){
//    add.innerText +=`${lastName}`

// }

// send4.onclick=function(){
//     printName2()
//     addLastName("samuel")
// }



// 18.	א. צרו פונקציה שמקבלת מהמשתמש שם פרטי. הפונקציה מדפיסה לחלון את השם 
// בשהתקבל מהמשתמש, המידע עטוף בתגית של p עם id.
// ב. צרו פונקציה נוספת שמקבלת שם משפחה, מוצאת את האלמנט p שנוצר, מוסיפה לו את 

// function printMyName() {
//     document.write(`<p id="pir">${name7.value}</p>`)
   
// }
// printMyName()
// function addDateAndLastName(DATE, Lname) {
//     pir.innerText += `${(DATE, Lname)}`
// }
// b.onclick=function(){
//     printMyName()
//     addDateAndLastName(new Date(), "samuel")
// }

// 19.	צרו פונקציה שמקבלת מהמשתמש צבע רכב, חברה וסמק. 
// א.	הפונקציה יוצרת אובייקט של car עם השדות צבע רכב, חברה, סמק.
// ב.	הפונקציה מדפיסה לחלון את אובייקט הרכב שנוצר.

// function getFromUser(){
//     var car={}
//    car.color=color.value
//    car.smk=smk.value
//    car.company=company.value
//    car.date=new Date()
//    console.log(car);
//    document.write(`${car.color}${smk.color}${company.color}`)

   
// }

// choose.onclick=function(){
//   getFromUser()
// }

// 20.	צרו פונקציה שמקבלת מהמשתמש צבע רכב, חברה וסמק. 
// א.	הפונקציה יוצרת אובייקט של car עם השדות צבע רכב, חברה, סמק, שנת ייצור (השנה 
//   שהאובייקט נוצר).
//   ב.	הפונקציה מדפיסה לחלון את אובייקט הרכב שנוצר.

// function getFromUser(){
//   var car={}
//  car.color=color.value
//  car.smk=smk.value
//  car.company=company.value
//  car.date=new Date()
//  console.log(car);
//  document.write(`${car.date}`)
// }

// choose.onclick=function(){
// getFromUser()
// }



// ============================================================================================================



// function getFromUser(){
//   var car={}
//  car.color=color.value
//  car.smk=smk.value
//  car.company=company.value
//  car.date=new Date()
//  console.log(car);
//  document.write(`<div>${car.date}${car.color}${car.company}${car.smk}`)
// }

// choose.onclick=function(){
// getFromUser()
// }


//
// ============================================================================================================
// ב.	הפונקציה מדפיסה לאלמנטי div את המידע שבאובייקט הרכב שנוצר, כל שדה באלמנט נפרד.

// function getFromUser(){
//   var car={}
//  car.color=color.value
//  car.smk=smk.value
//  car.company=company.value
//  car.date=new Date()
//  console.log(car);
//  document.write(`<div id="aa">${car.date}</div> <div id="bb">${car.color}</div> <div id="cc">${car.company}</div> <div id="dd">${car.smk}</div>`)
// }

// choose.onclick=function(){
// getFromUser()
// }




