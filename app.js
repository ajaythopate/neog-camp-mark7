var userinput = document.querySelector("#user-inpute");
var outputbutton = document.querySelector("#output-button");
var transletedoutput = document.querySelector("#transleted-output");

var serverURL = 'https://api.funtranslations.com/translate/pirate.json';

function getTranslationURL(userinput) {
    return serverURL + "?" + "text=" + userinput
}


function insertTransletedoutput(transletedText) {
    return transletedoutput.innerHTML = transletedText;
}
function clickHandler() {
    var userinput = userinput.value;
    fetch(getTranslationURL(userinput)).then(responce => responce.json()).then(data => {
        var transletedText = data.contents.transleted;
        console.log(data)
        insertTransletedoutput(transletedText)
    })



}

outputbutton.addEventListener("click", clickHandler)
