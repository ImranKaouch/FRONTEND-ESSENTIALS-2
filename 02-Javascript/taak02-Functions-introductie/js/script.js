
function toonAlertBox(){
    alert("Een willekeurige boodschap")
}
toonAlertBox();

function toonPrompt(){
    tekst = prompt("Typ iets in");
    alert(tekst);
}
toonPrompt()

function toonconfirm(){
    boxie = confirm("Druk op ok, of niet...")
}
toonconfirm();
if(boxie == true){
    alert("OK")
}
else{
    alert("Dan niet!")
}


