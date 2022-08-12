function calc() {

    let def = "0";
    let valOne = document.getElementById("value1").value;
    let op = document.getElementById("op").value;
    let valTwo = document.getElementById("value2").value;

    if (op === "pls") {
        def = Number(valOne) + Number(valTwo);
    }

    else if (op === "minus") {
        def = Number(valOne) - Number(valTwo);
    }

    else if (op === "gange") {
        def = Number(valOne) * Number(valTwo);
    }

    else if (op === "dividere") {
        def = Number(valOne) / Number(valTwo);
    }

    if(op === "dividere") {
        if (def == "Infinity") {
           alert("Please don't divide by zero.");
           return;
        }
     }

     if(valOne ==="") {
        alert("Please enter numbers in both sections")
        return false;
     }

     if(valTwo ==="") {
        alert("Please enter numbers in both sections")
        return false;
     }
    console.log(def)
    return false;
}