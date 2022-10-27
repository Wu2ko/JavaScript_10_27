
/*
function  sum(a,b,fn){
    fn()
    return a+b;
}
console.log(sum(5,12, function (){console.log("Labas")}))
///function = method in object
*/
/*
const sum = function (a,b) {
    return a + b;
}
console.log(sum(5,12))
 */
//const sum = (a,b)=>{return a+b;} //arrow function

//console.log(sum(5,12))
/*    (function()    //IIFE

{
    let name = "Jonas"

    function showName() {
        let name = "Tadas"
        return name;
    }

    console.log(name)
})("use strict")
 */
/*
const users =[
    'Marius',
    'Ieva',
    'Darius',
    'Migle'
];
for (let user of users)
{
 //   console.log(user.length)
    if (user.length > 5){
        console.log(user)
    }
}
*/
/*
let students = [
    {
        name: "Jonas",
        lastName: "Jonaitis",
        email:"jonas@jonaitis.lt",
        score: 125.8
    },
    {
        name: "Vardenis",
        lastName: "Pavardenis",
        email:"vardenis@pavardenis.lt",
        score: 25.8
    },
    {
        name: "Petras",
        lastName: "Petraitis",
        email:"petras@petraitis.lt",
        score: 35.33
    }
]
for(let student in students){
    students = students.filter(student=>student.score>30)
}

students.sort((a,b)=>{
    if(a.score <b.score){
        return -1;
    }
    if (a.score>b.score){
        return 1;
    }
})
console.log(students)

function sum (...numbers) {
    const initialValue = 0
    const sumWithInitial = numbers.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue);
    return sumWithInitial;
}
console.log(sum(23,25,14,15,28))


const totalPoints = students.reduce(
    (previousValue, currentValue)=> previousValue + currentValue.score,0
);
console.log(totalPoints)*/




let katalogas =
    {
        grozinesKnygos: [
            {
                ISBN: "789456",
                leidimoMetai: "1999",
                pavadinimas: "Poteris 2",
                puslapiai: "125"
            },
            {
                ISBN: "78654",
                leidimoMetai: "2005",
                pavadinimas: "Poteris Desimt",
                puslapiai: "350"
            },
        ],


        mokslineLiteratura: [
            {
                ISBN: "123456",
                leidimoMetai: "2012",
                pavadinimas: "Stalas ir kede",
                puslapiai: "999"
            },
            {
                ISBN: "6543219",
                leidimoMetai: "2010",
                pavadinimas: " Monitorius ir Pele",
                puslapiai: "69"
            },
            {
                ISBN: "5492123",
                leidimoMetai: "2022",
                pavadinimas: "Vyno gerimas",
                puslapiai: "10"
            },
            {
                ISBN: "9863772",
                leidimoMetai: "2019",
                pavadinimas: "Afrikos geles",
                puslapiai: "537"
            },
            {
                ISBN: "68713552",
                leidimoMetai: "2021",
                pavadinimas: "Baletas ir suo",
                puslapiai: "437"
            },
        ],


        lietuviska: [
        {
            ISBN: "98753333",
            leidimoMetai: "2014",
            pavadinimas: "Vaikai ir ko",
            puslapiai: "6547"
        },
        {
            ISBN: "8475612",
            leidimoMetai: "2022",
            pavadinimas: " Monikes Biznis",
            puslapiai: "320"
        },
        {
            ISBN: "75312",
            leidimoMetai: "1650",
            pavadinimas: "Versiukas valgo piena",
            puslapiai: "666"
        },
        {
            ISBN: "78941",
            leidimoMetai: "1845",
            pavadinimas: "Lietuvos geles",
            puslapiai: "97"
        },
        {
            ISBN: "7832161",
            leidimoMetai: "1945",
            pavadinimas: "Stalino rastai",
            puslapiai: "1337"
        },
    ]
}
//console.log(katalogas)
//
//siais metais = + 'nauja knyga'
//skaicius kategorijoje
/*
    for (let kategorija in katalogas) {
      //   console.log(kategorija)

        for (let du in katalogas[kategorija]) {
          //  console.log(du){
                for (let trys in du){
                    console.log(du[trys])
                }
            }
        }
*/

for (let category in katalogas){
    console.log("Kategorija: " +category)
    for (let book of katalogas[category]){
        for(let property in book){
            console.log(property,": ",book[property])
        }
        console.log("-------------------")
    }
    console.log("-------------------")
}

//console.log(katalogas.grozinesKnygos.ISBN)
/*for (let kategorija of katalogas.grozinesKnygos)
{
    console.log(kategorija)
}
*/