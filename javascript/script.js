// prelevo il form
const formElem = document.getElementById("travelcard-form");

// prelevo tutti gli input

const nameInput = document.getElementById("name");
const kmInput = document.getElementById("km");
const ageInput = document.getElementById("age");

// prelevo gli elementi da compilare

const passengerElem = document.getElementById("passenger");
const offerElem = document.getElementById ("offer");
const carrozzaElem = document.getElementById ("carrozza");
const codecpElem = document.getElementById ("codecp");
const ticketcostElem = document.getElementById ("ticketcost");

formElem.addEventListener("submit", handleForm);

function handleForm(event){
    event.preventDefault(); //prevengo il refresh del form

    // prelevo tutti i valori degli input
    const name = nameInput.value;
    const km = kmInput.value;
    const age = ageInput.value;

    // debug
    console.log(name, km, age);


    // inserisco la formula di calcolo del biglietto


    while (true) {
    // const km = prompt("Inserisci qui i chilometri da percorrere");
    km = parseInt(kmInput.value);

    if (!isNaN(km) && km > 0) {
        break;
    }

    // alert("Valore non valido per i chilometri. Inserisci un numero positivo.");
    }

    while (true) {
    // const userAge = prompt("Inserisci qui la tua età");
    age = parseInt(ageInput.value);

    if (!isNaN(age) && age > 0 && age < 150) {
        break;
    }

    // alert("Valore non valido per l’età. Inserisci un numero positivo.");
    }


    const priceOnKm= 0.21;

    const kmPrice= kmNumber * priceOnKm; 

    let finalPrice ;
    const minorPercent= (20/100);
    const oldPercent= (40/100); 

    if (userAgeNumber < 18){
        finalPrice= kmPrice -(kmPrice* minorPercent);
    }else if (userAgeNumber >= 18 && userAgeNumber < 65){
        finalPrice= kmPrice;
    }else if(userAgeNumber >= 65 && userAgeNumber < 150){
        finalPrice= kmPrice -(kmPrice* oldPercent);
    }

    console.log(`il prezzo finale del tuo biglietto è di € ${finalPrice.toFixed(2)}`);

    passengerElem.innerHTML = `${passenger}`;
    // offerElem.innerHTML = da aggiungere alla condizione le tre tipologie di biglietto standard, sconto vecchi, sconto giovani
    carrozzaElem.innerHTML =  Math.random();
    codecpElem.innerHTML = Math.random();
    ticketcostElem = `${finalPrice}`
}   









// let kmNumber ;

// while (true) {
//     // const km = prompt("Inserisci qui i chilometri da percorrere");
//     kmNumber= parseInt(km);

//     if (!isNaN(kmNumber) && kmNumber > 0) {
//         break;
//     }

//     // alert("Valore non valido per i chilometri. Inserisci un numero positivo.");
// }

// let userAgeNumber ;

// while (true) {
//     // const userAge = prompt("Inserisci qui la tua età");
//     userAgeNumber= parseInt(userAge);

//     if (!isNaN(userAgeNumber) && userAgeNumber > 0 && userAgeNumber < 150) {
//         break;
//     }

//     // alert("Valore non valido per l’età. Inserisci un numero positivo.");
// }


// const priceOnKm= 0.21;

// const kmPrice= kmNumber * priceOnKm; 

// let finalPrice ;
// const minorPercent= (20/100);
// const oldPercent= (40/100); 

// if (userAgeNumber < 18){
//     finalPrice= kmPrice -(kmPrice* minorPercent);
// }else if (userAgeNumber >= 18 && userAgeNumber < 65){
//     finalPrice= kmPrice;
// }else if(userAgeNumber >= 65 && userAgeNumber < 150){
//     finalPrice= kmPrice -(kmPrice* oldPercent);
// }

// console.log(`il prezzo finale del tuo biglietto è di € ${finalPrice.toFixed(2)}`);