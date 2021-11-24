// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


const emails = ["giuseppe@gmail.com", "chiara@gmail.com", "alfredo@gmail.com", "antonella@gmail.com", "federica@gmail.com"];
console.log(emails);

emailsLength = emails.length;
console.log(emailsLength);

let userEmail = prompt ("Qual è la tua email");

for (let i = 0; i < emailsLength; i++) {


    if (userEmail = (emails[i])) {
        console.log(userEmail);
    } else {
        console.log(emails[i]);
    }
}

