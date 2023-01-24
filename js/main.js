// TRACCIA:

// Scrivere un programma che chieda all'utente:
// Il numero di chilometri da percorrere
// Età del passeggero

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// Il prezzo del biglietto è definito in base ai km (0.21 € al km)
// Va applicato uno sconto del 20% per i minorenni
// Va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).


// PASSAGGI:
// raccogliere dall'utente nome km ed età
const userKm = document.querySelector("#inputUserKm");
const userAge = document.querySelector("#inputUserAge");
const Ticket = document.querySelector("#ticket")
const Button = document.querySelector("#button");

// DEFINIRE costo biglietto di 0.21 $ per km:
const costXkm = 0.21;
const costTicket = (costXkm * userKm.value);


Button.addEventListener(
    "click",
    function () {
        // subTitle.innerHTML = userKm.value + userAge.value;
        console.log(userKm.value + "km " + userAge.value + "anni");
        // price.innerHTML = costTicket.toFixed(2) + " euro";
        // per determinare sconto eventuale al biglietto
        if (userAge.value < 18) {
            // SE utente minore sconto del 20%
            price.innerHTML = (((costXkm * userKm.value) * 20 / 100).toFixed(2) + " euro");
            console.log("passeggiero minore: " + price.innerHTML);
        }
        // ALTRIMENTI SE over 65 sconto del 40%
        else if (userAge.value >= 65) {
            price.innerHTML = ((costTicket * 40 / 100).toFixed(2) + " euro");
            console.log("passeggiero over65: " + price.innerHTML);
        }
        // ALTRIMENTI prezzo pieno
        else {
            price.innerHTML = (costTicket.toFixed(2) + " euro");
            console.log("prezzo pieno " + costTicket.toFixed(2) + " euro");
        }


    }
)




// DEFINIRE costo biglietto per minori<18 e over>=65 con i rispettivi sconti:
// if (userAge < 18) {
//     // SE il passeggiero è < 18 si applica lo sconto del 20 %
//     const costTicket = ((costXkm * userKm) * 20 / 100);
//     console.log("Il passeggiero è minore. Tot importo:" + costTicket + "euro");
// }
// ALTRIMENTI SE il passeggiero è >=65 si applica uno sconto del 40%
// else if (userAge >= 65) {
//     const costTicket = ((costXkm * userKm) * 40 / 100);
//     console.log("Il passeggiero è over65. Tot importo:" + costTicket + "euro");
// }
// ALTRIMENTI passeggiero che nn rientra nelle due cat. prezzo pieno
// else {
//     console.log("Prezzo pieno. Tot importo:" + costTicket.toFixed(2) + "euro");
// }

