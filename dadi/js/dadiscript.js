// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let randUser = Math.floor(Math.random() * 6 + 1);
console.log("il punteggio dell'utente è " + randUser);

let randComp = Math.floor(Math.random() * 6 + 1);
console.log("il punteggio del computer è " + randComp);

if (randUser > randComp) {
    console.log("L'utente vince.");
    const userWins = document.querySelector(".container");
    userWins.innerHTML = "<h1>L'UTENTE VINCE</h1>"

} else if (randComp > randUser) {
    console.log("Il computer vince.");
    const compWins = document.querySelector(".container");
    compWins.innerHTML = "<h1>IL COMPUTER VINCE</h1>"

} else {
    console.log("E' un pareggio.");
    const tie = document.querySelector(".container");
    tie.innerHTML = "<h1>E' UN PAREGGIO</h1>"
}

