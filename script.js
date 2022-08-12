
function calc() {

    // Variabler laves
    let def = "0";
    let valOne = document.getElementById("value1").value;
    let valTwo = document.getElementById("value2").value;
    let op = document.getElementById("op").value;

    // Hvis operatoren er identisk med plus, så skal default udgive et number som er ValOne plus ValTwo
    if (op === "plus") {
        def = Number(valOne) + Number(valTwo);
    }
    // Ellers hvis operatoren er identisk med minus, så skal default udgive et number som er ValOne minus ValTwo
    else if (op === "minus") {
        def = Number(valOne) - Number(valTwo);
    }
    // Ellers hvis operatoren er identisk med gange, så skal default udgive et number som er ValOne gange med ValTwo
    else if (op === "times") {
        def = Number(valOne) * Number(valTwo);
    }
    // Ellers hvis operatoren er identisk med dividere, så skal default udgive et number som er ValOne divideret med ValTwo
    else if (op === "divide") {
        def = Number(valOne) / Number(valTwo);
    }


    /* Error handling. Skrives der forkte inputs, så vises der en alert */
    // Hvis der divideres med 0 = Error
    if(op === "divide") {
        if (def == "Infinity") {
           alert("Please don't divide by zero.");
           return;
        }
     }
    // Hvis man ikke indtaster noget = Error
     if(valOne === "") {
        alert("Please enter numbers in both sections")
        return false;
     }
    // Hvis man ikke indtaster noget = Error
     if(valTwo === "") {
        alert("Please enter numbers in both sections")
        return false;
     }

    // Det viser resultatet i konsollen
    console.log(def)
    return false;
}