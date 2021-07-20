/* 1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova */

var listSurnames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
//1. chiedi all’utente il cognome
var newSurname = prompt("Qual è il tuo cognome?")
//inseriscilo in un array con altri cognomi
listSurnames.push(newSurname);

var listSurnames_copy = listSurnames.slice();
// var listSurnames_copy = [...listSurnames];  --> altro modo per copiare gli elmenti di un array

// stampa la lista ordinata alfabeticamente
var sortedSurnames = listSurnames_copy.sort(function (a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
  });

  document.getElementById("elenco_cognomi").innerHTML = sortedSurnames;
  /* console.log(sortedSurnames); */
//scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova 
document.getElementById("posizione").innerHTML = ((sortedSurnames.indexOf(newSurname)) + 1);

