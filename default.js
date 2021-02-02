const person = {name: "abc", age:18, job:"Doctor", address:"Hiti"};
const personName = person.name;
const {age, job} = person;
console.log(personName, age, job);

const complexObject = {
    name: "abc",
    info:{
        home: "tyher",
        leader: "hulo"
    }
}

const {leader} = complexObject.info;
console.log(leader);

const players = ["Messi", "Suarez", "Coutinho", "Neto"];
const [Goat, friend, ...restPlayers] = players;
console.log(Goat,friend, restPlayers);
