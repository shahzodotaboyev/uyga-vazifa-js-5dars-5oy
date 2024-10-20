// 1masala
// let anim = {
//     name: 'tiger',
//     speed: '56-64 km/h',
//     limitAge: '11 year',

//     get info() {
//         return `${ this.name }, ${ this.speed }, ${ this.limitAge }`
//     }
// }
// console.log(anim.info);

// 2masala

// class Student {
//     constructor(name, course, years, university) {
//         this._name = name;
//         this._course = course;
//         this._years = years;
//         this._university = university;
//     }

//     get name() {
//         return this._name;
//     }
//     set name(newName) {
//         this._name = newName;
//     }

//     get course() {
//         return this._course;
//     }
//     set course(newCourse) {
//         this._course = newCourse;
//     }

//     get years() {
//         return this._years;
//     }
//     set years(newYear) {
//         this._years = newYear;
//     }

//     get university() {
//         return this._university;
//     }
//     set university(newUniversity) {
//         this._university = newUniversity;
//     }

//     leftYears(currentYear) {
//         return this._years - currentYear;
//     }
// }

// let student1 = new Student('Furqat', 'Frontend', 4, 'Najot Talim');

// console.log(student1.name);
// console.log(student1.course);
// // console.log(student1.years);
// console.log(student1.university);



// console.log(student1.leftYears(2));


// masal 3
// class student {
//     constructor(name, age, currotYear){
//         this._name = name,
//         this._age = age,
//         this._currotYear =  currotYear
//     }
//     get name(){
//         return this._name;
//     }
//     set name(newName){
//         this._name = newName
//     }
//     get age(){
//         return this._age;
//     }
//     set age(newAge){
//         this._age = newAge
//     }

//     get currotYear(){
//         return this._currotYear
//     }
//     set currotYear(newCurrotYear){
//         this._currotYear = newCurrotYear
//     }

//     getBirthYear(){
//         return this._currotYear - this._age;
//     }
// }
// let student1 = new student ('Shahzod',15,2024);
// console.log(`Name: ${student1.name}`);
// console.log(`age: ${student1.age}`);
// console.log(`tug'ilgan yi: ${student1.getBirthYear()}`);

// masala 5

// class tortBurchak {
//     constructor(width, height) {
//         this._width = width,
//             this._height = height
//     }
//     get width() {
//         return this._width
//     }
//     set width(newWidth) {
//         this._width = newWidth
//     }
//     get height() {
//         return this._height
//     }
//     set height(newHeight) {
//         this._height = newHeight
//     }
//     getArea() {
//         return this._width * this._height
//     }
//     getPerimetr() {
//         return 2 * (this._width + this._height)
//     }
// }
// let tortBurchak1 = new tortBurchak(10,5)
// console.log(`Yuzasi: ${tortBurchak1.getArea()}`);
// console.log(`Perimetr: ${tortBurchak1.getPerimetr()}`);
