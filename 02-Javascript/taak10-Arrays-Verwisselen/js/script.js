topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca"
];

document.querySelector(".film1-ranking").innerHTML = 1;
document.querySelector(".film1-naam").innerHTML = topFilms[0];
document.querySelector(".film2-ranking").innerHTML = 2;
document.querySelector(".film2-naam").innerHTML = topFilms[1];
document.querySelector(".film3-ranking").innerHTML = 3;
document.querySelector(".film3-naam").innerHTML = topFilms[2];
document.querySelector(".film4-ranking").innerHTML = 4;
document.querySelector(".film4-naam").innerHTML = topFilms[3];
document.querySelector(".film5-ranking").innerHTML = 5;
document.querySelector(".film5-naam").innerHTML = topFilms[4];


function fillTable() {
    var i;
    for (i = 0; i < topFilms.length; i++) {
        document.getElementsByClassName("film-ranking")[i].innerHTML = i + 1;
        document.getElementsByClassName("film-naam")[i].innerHTML = topFilms[i];
    }
}
fillTable();
function moveup(item) {
    if (item > 0) {
        //roep de functie aan om een item te verplaatsen
        moveInArray(topFilms, item, item - 1);
        fillTable();
    }
    else {
        alert("Kan niet!");
    }
}

function movedown(item) {
    if (item < 4) {
        moveInArray(topFilms, item, item + 1);
        fillTable();
    }
    else {
        alert("Kan niet!");
    }
}
//deze functie krijgt 3 waardes mee: de naam van de array, de positie waar die opstaat, de positie waar die heen moet
function moveInArray(arr, from, to) {
    // Delete the item from it's current position
    var item = arr.splice(from, 1);
    // Move the item to its new position
    arr.splice(to, 0, item[0]);
    console.log(topFilms);
};
// laat de array topFilms in de console zien

function resetList() {

}