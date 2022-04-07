/* 
Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.

MILESTONE 1 (da fare entro le 18):
stampare su console le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2 (se ce la fai falla entro le 18 altrimenti puoi consegnare anche dopo le 18 - easy):
stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1 (solo se non sei giá frustrato dalle milestone 1 e 2):
trasformare la stringa foto in una immagine effettiva

BONUS 2 (solo se non sei giá fuso):
organizzare i singoli membri in card/schede
 */


// definire un array di oggetti ==> membri del team
const team = [];


function generateMyTeamUser(firstName, secondName, role) {
    const user = {
        nome: firstName,
        cognome: secondName,
        ruolo: role
    }

    team.push(user);

}

//console.log(team);

// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.