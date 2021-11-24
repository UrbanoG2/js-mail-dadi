// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let randUser = Math.floor(Math.random() * 6 + 1);
console.log("il punteggio dell'utente è " + randUser);

let randComp = Math.floor(Math.random() * 6 + 1);
console.log("il punteggio del computer è " + randComp);

if (randUser > randComp) {
    console.log("L'utente vince.");
} else if (randComp > randUser) {
    console.log("Il computer vince.");
} else {
    console.log("E' un pareggio.");
}