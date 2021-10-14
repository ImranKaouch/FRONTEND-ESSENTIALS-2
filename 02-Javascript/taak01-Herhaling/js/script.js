let strNaam;
let boolNaamKlopt;
strNaam = prompt("Wat is uw naam?");
alert ("Je heet " + strNaam);
boolNaamKlopt = confirm("Heet je echt " + strNaam + "?")

if(boolNaamKlopt == true){
    alert("Welkom " + strNaam)
}
else{
    prompt("Voer nogmaals uw naam in");
}
boolNaamKlopt = confirm("Heet je echt " + strNaam + "?")
if(boolNaamKlopt == true){
    alert("Welkom " + strNaam + "!");
}
else{
    alert("Ok, evengoed Welkom")
}