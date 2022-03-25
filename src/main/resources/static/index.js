
function Kalkulator(verdi){

document.getElementById("resultat").value +=verdi;

/*Vi har allerede gitt en verdi innenfor hver av knappene med onclick="Kalkulator()" funksjon, i denne funksjonen kaller
vi det for verdi slik at vi kan gjør at hver av tallene tastes opp og legges ved hverandre med +=sitt eget navn
 */


}

function Løs(){
    let resultatområdet = document.getElementById("resultat").value
    let svaret = eval(resultatområdet)
    document.getElementById("resultat").value = svaret;

    //eval sørger for at alle verdiene som står innenfor resultatområdet regnes om og blir om til et tall (altså svaret)
}

function Clear(){
    document.getElementById("resultat").value = "";


}

