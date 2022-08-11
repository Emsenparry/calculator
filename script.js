function calc(form) {

    let def = "0";
    let valOne = document.getElementById("value1").value;
    let op = document.getElementById("op").value;
    let valTwo = document.getElementById("value2").value;

    if (op === "+") {
        def = parseFloat(valOne) + parseFloat(valTwo);
    }

    else if (op === "-") {
        def = parseFloat(valOne) - parseFloat(valTwo);
    }

    else if (op === "*") {
        def = parseFloat(valOne) * parseFloat(valTwo);
    }

    else if (op === "/") {
        def = parseFloat(valOne) / parseFloat(valTwo);
    }

    if(op == "/") {
        if (def == "Infinity") {
           alert("Please don't divide by zero.");
           return;
        }
     }

     if(valOne =="") {
        alert("Please enter numbers in both sections")
        return false;
     }

     if(valTwo =="") {
        alert("Please enter numbers in both sections")
        return false;
     }
    console.log(def)
    return false;
}