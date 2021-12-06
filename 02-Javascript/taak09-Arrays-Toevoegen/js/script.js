topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca",
    "Citizen Kane",
    "Gone with the Wind",
    "The Wizard of Oz",
    "One Flew Over the Cuckoo's Nest",
    "Lawrence of Arabia"
];
eigenTopFilms = [
    
]

//met deze for-loop word de ordered list gevuld met film namen
for(i = 0; i < topFilms.length; i++){
    document.querySelector(".imdb-film" + (i+1)).innerHTML = topFilms[i];
}
var numkeus = 1;

function kiesFilm(){
    var element = document.querySelector('.eigen-film' + numkeus); 
    var keuze = prompt("Welke film staat op plek " +numkeus + "?")
    element.innerHTML = topFilms[keuze-1];
    numkeus++;
    document.querySelector('.kiesfilm-button').innerHTML = "Kies film voor plek " + numkeus; 
}

function showAlert() {
    if (numkeus > 3) {
        alert("Top 3 is gekozen");
    }
    showAlert();
}

