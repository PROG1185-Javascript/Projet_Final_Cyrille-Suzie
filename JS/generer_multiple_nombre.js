 // Fonction qui va prendre un nombre et renvoyer son multiple
function generateMultiples() {
    var numberInput = document.getElementById('number');
    var multiplesDiv = document.getElementById('multiples');
    var number = parseInt(numberInput.value);
    
 // Condition que les multiples soient entre 1 et 10
    if (!isNaN(number)) {
        var html = '<h3>Les multiples de ' + number + ':</h3><ul>';
        for (var i = 1; i <= 10; i++) {
            html += '<li>' + number + ' &times; ' + i + ' = ' + (number * i) + '</li>';
        }
        html += '</ul>';
        multiplesDiv.innerHTML = html;
    } else {
        multiplesDiv.innerHTML = '<p>Please enter a valid number.</p>';
    }
}
