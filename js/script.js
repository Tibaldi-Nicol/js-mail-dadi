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