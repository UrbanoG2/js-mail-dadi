// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


const emails = ["giuseppe@gmail.com", "chiara@gmail.com", "alfredo@gmail.com", "antonella@gmail.com", "federica@gmail.com"];
console.log(emails);

emailsLength = emails.length;
console.log(emailsLength);

const userEmail = prompt ("Qual è la tua email");

let found = false;

for (let i = 0; i < emails.length; i++) {
    

    if (userEmail == emails [i]) {
        
        found = true;
        console.log("puoi entrare");
    } 

}    

console.log(found);