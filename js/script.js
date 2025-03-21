// Creare un array di email e chiedere all'utente la sua email
// controllare se è nella lista di chi può accedere e stampare un messaggio appropriato
// messaggio di test con prompt
const test = prompt('Vuoi accedere?');
console.log(test);


const emails = ["fabrizio@gmail.com", 'noemi@gmail.com','marco@gmail.com','giovanni@gmail.com'];
let check = false;
const email = prompt('Inserisci la tua email');
for (let i = 0; i < emails.length; i++) {
  if(email == emails[i]){
    check = true;
  }
}
if(check == true){
  console.log('Accesso consentito');
}
else{
  console.log('Accesso negato');
}