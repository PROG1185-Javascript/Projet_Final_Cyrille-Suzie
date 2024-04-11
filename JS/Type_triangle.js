function determineTriangleType() {
    var side1 = parseFloat(document.getElementById("side1").value);
    var side2 = parseFloat(document.getElementById("side2").value);
    var side3 = parseFloat(document.getElementById("side3").value);

    var resultElement = document.getElementById("result");
    var result = "";

    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
        if (side1 === side2 && side2 === side3) {
            result = "Le triangle est équilatéral";
        } else if (side1 === side2 || side1 === side3 || side2 === side3) {
            result = "Le triangle est isocèle";
        } else if (Math.pow(side1, 2) + Math.pow(side2, 2) === Math.pow(side3, 2) ||
                   Math.pow(side1, 2) + Math.pow(side3, 2) === Math.pow(side2, 2) ||
                   Math.pow(side2, 2) + Math.pow(side3, 2) === Math.pow(side1, 2)) {
            result = "Le triangle est rectangle";
        } else {
            result = "Le triangle est quelconque";
        }
    } else {
        result = "Les longueurs des côtés ne forment pas un triangle valide";
    }

    resultElement.textContent = result;
}

