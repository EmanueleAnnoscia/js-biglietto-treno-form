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
const ticketElem = document.getElementById("ticket")


formElem.addEventListener("submit", handleForm);
const resetButton = document.getElementById("annulla");

function handleForm(event){
    event.preventDefault(); //prevengo il refresh del form

    // prelevo tutti i valori degli input
    const name = nameInput.value;
    const km = parseInt(kmInput.value);
    const age = parseInt(ageInput.value);

    // debug
    // console.log(name, km, age);


    // inserisco la formula di calcolo del biglietto

    // controllo sui chilometri
    if (isNaN(km) || km <= 0) {
        alert("Inserisci un numero di chilometri valido");
        return;
    }

    // controllo sull'età
    if (isNaN(age) || age <= 0 || age > 150) {
       alert("Inserisci un'età valida");
       return;
    }



    const priceOnKm= 0.21;

    const kmPrice= km * priceOnKm; 

    let finalPrice ;
    const minorPercent= (20/100);
    const oldPercent= (40/100); 
    let offerta = "";

    if (age < 18){
        finalPrice= kmPrice -(kmPrice* minorPercent);
        offerta = "Ridotto Giovani";
    }else if (age >= 18 && age < 65){
        finalPrice= kmPrice;
        offerta = "Offerta Standard"
    }else if(age >= 65 && age < 150){
        finalPrice= kmPrice -(kmPrice* oldPercent);
        offerta = "Ridotto Anziani"
    }

    // console.log(`il prezzo finale del tuo biglietto è di € ${finalPrice.toFixed(2)}`);

    passengerElem.innerText = name;
    offerElem.innerText = offerta;
    carrozzaElem.innerText =  Math.floor(Math.random()*10 + 1);
    codecpElem.innerText = Math.floor(Math.random()*100000);
    ticketcostElem.innerText = "€" + finalPrice.toFixed(2);

    ticketElem.classList.remove("d-none")
}   


resetButton.addEventListener("click", function () {
    passengerElem.innerText = "";
    offerElem.innerText = "";
    carrozzaElem.innerText = "";
    codecpElem.innerText = "";
    ticketcostElem.innerText = "";
});





// formula del biglietto del treno
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