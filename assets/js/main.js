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
let user;
const btnInsertElement = document.getElementById('btnInsert');
let elementUser = document.querySelector('.row');
let elementCols;
let elementCard;
let elementCardImg;
let elementCardNameUser;
let elementCardRoleUser;

//console.log(elementCardImgLink);

function generateMyTeamUser() {
    let fullName = document.getElementById('fullName').value;
    let role = document.getElementById('role').value;
    let image = document.getElementById('image').value;
    user = {
        fullName: fullName,
        role: role,
        img: image
    }
    team.push(user);
    insertElementDom();
    elementCardNameUser.innerHTML = user.fullName;
    elementCardRoleUser.innerHTML = user.role;
    elementCardImg.setAttribute('src', image);

    //console.log(team);
    //console.log('ho cliccato');
}

//console.log(team);

function generateElementDom(element, classDom) {
    const elementDom = document.createElement(element);
    elementDom.classList.add(classDom);
    return elementDom;
}

//generateElementDom('div', '.card', elementUser);
//generateElementDom('div', '.cols');

btnInsertElement.addEventListener('click', generateMyTeamUser);

function insertElementDom() {
    elementCols = generateElementDom('div', 'cols');
    elementCard = generateElementDom('div', 'card');
    elementCardImg = generateElementDom('img', 'img-fluid');
    elementCardNameUser = generateElementDom('p', 'name-text');
    elementCardRoleUser = generateElementDom('p', 'role-text');
    elementUser.appendChild(elementCols);
    elementCols.appendChild(elementCard);
    elementCard.appendChild(elementCardImg);
    elementCard.appendChild(elementCardNameUser);
    elementCard.appendChild(elementCardRoleUser);

}
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.