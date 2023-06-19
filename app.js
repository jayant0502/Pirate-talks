var btnjs=document.querySelector("#btn")  
var textinput = document.querySelector("#txtinput")
var output=document.querySelector("#output")

var serverurl="https://api.funtranslations.com/translate/pirate.json"
// var serverurl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function gettranslation(text){
    return serverurl + "?" + "text=" + text
}

function errorhandler(error){
    console.log("there is an error",error)
    alert("something worng please try after some time")
}

function clickeventlistner(){
    var inputtext= textinput.value
    
    fetch(gettranslation(inputtext))
    .then(response=> response.json())
    .then(json=> {
        var translatedtext= json.contents.translated;
        output.innerText = translatedtext;
    })
    .catch(errorhandler)
};
btnjs.addEventListener("click",clickeventlistner)