/*jsnacks blocco 1*/

//jSnack 1
/*l'utente inserisce due numeri in successione, con due prompt. il softwaee stampa il maggiore*/

/*let domanda1 = Number(prompt("inserire numero"));
let domanda2 = Number(prompt("inserire numero"));


console.log(`${(domanda1) > (domanda2) ? "è maggiore il primo" : "è maggiore il secondo"}`);*/

//jSnack 2
/*L'utente inserisce due parole in successione, con due prompt. il softwere stampa prima la parola più corta, poi la parola più lunga*/

/*let parola1 = prompt("inserire parola");
let parola2 = prompt("inserire parola");

console.log(`${(parola1.length) > (parola2.length) ? "è più lunga la prima" : "è più lunga la seconda"}`);*/

//jSnack 3
/*Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while.*/

/*let somma = 0
for (let i = 0; i <= 4; i++){
  let domanda = Number(prompt("inserisci numero"));
  somma = somma + domanda;
}
console.log(somma);*/
/*let somma = 0;
let i = 0;
while (i <= 4){
  let domanda = Number(prompt("inserisci numero"));
  somma = somma + domanda;
  i++
}
console.log(somma);*/

//jsnack 4
/*In un array sono contenuti i nomi degli invitati alla festa del
grande Gatsby, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa.*/
/*const nomiInvitati = ["mario", "alberto", "franco"];
let nomeUtente = prompt("inserisci il tuo nome");*/
/*for (let i = 0; i < nomiInvitati.length; i++){
  console.log(`${(nomeUtente) == (nomiInvitati[i]) ? "entra alla festa" : "non sei in lista"}`)
}*/

/*let trovato = false
for (let i = 0; i < nomiInvitati.length; i++){
 if (nomeUtente == nomiInvitati[i]){
   trovato = true
 }
}
console.log(`${(trovato) ? "entra alla festa" : "non sei in lista"}`);*/

//jsnack 5
/*Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array.*/

/*const contenitore = [];
for (let i = 0; i < 6; i++){
  let numeroUtente = Number(prompt("inserisci un numero"))
  if (numeroUtente % 2 == 0){
    console.log("numero pari");
  } else {
    contenitore.push(numeroUtente);
  }
}
console.log(contenitore);*/

//jsnack 6
/*Stampa il cubo dei primi N numeri, dove N è un numero
indicato dall’utente.*/

/*let numeroUtente = Number(prompt("inserisci numero"));
const calcoloCubo = (numero, cubo) => {
  return Math.pow(numero, cubo);
}

for (let i = 0; i <= numeroUtente; i++){
  console.log(calcoloCubo(i, 3));
}*/

//jsnack 7
/*Stampa le potenze di 2 fino a 1000.*/

/*const calcoloCubo = (numero, cubo) => {
  return Math.pow(numero, cubo);
}


for (let i = 0; i < 1000; i++){

  let pote2 = calcoloCubo(2, 2)* i
  console.log(pote2);
}*/

//jsnack 8
/*Chiedi un numero di 4 cifre all’utente e calcola la somma
di tutte le cifre che compongono il numero.*/
/*var sum = 0;
for (var i = 0; i < number.length; i++) {
    var n = Number(number[i]);

    sum = sum + n;
}
console.log(sum);


let somma = 0;
for (let i = 0; i < numeroUtente.length; i++) {
    let numero2 = Number(numeroUtente[i]);
console.log(numero2);

    //somma = somma + numero2;

}*/
//console.log(`${(somma = somma + numero2)}`);
