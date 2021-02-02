const jersey = 10;
//console.log(jersey);

const numbers = [12, 45];
numbers[1] = 88;
numbers.push(12);
//console.log(numbers);

const player = {playerName:"hello", phone:1432};

let patientName = "Rahim";
patientName = "Fatema"
console.log(patientName);

let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;   
}
console.log(i);

// function doubleIt (num){
//     return num*2;
// }
// const doubleIt  = function(num){
//     return num*2;
// }

const doubleIt = num => num*2;
const add = (x,y) => x + y;
const give5 = () => 5;
const big = (x,y) => {
    const sum = x + y;
    const diff = x-y;
    const result = sum * diff;
    return result; 
}

const result = big(1,2);
console.log(result);
const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5 , ...ages3];
//console.log(allAges2);
const business = 650;
const minister = 450;
const shochib = 250;
const money = [650, 450, 250];
const maximum = Math.max(...money);
console.log(maximum);
class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "og";
    }
}

const student1 = new Student(12, "hello");
const student2 = new Student(22, "get");
console.log(student1.name, student2.name);
class Parent{
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Nah");
const baby2 = new Child("tom")
console.log(baby.getFullName());
console.log(baby2);