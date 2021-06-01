for (var i = 1; i <101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        document.getElementById('result').innerHTML += '<br>' + 'fizzbuzz';
    } else if (i % 5 == 0) {
        document.getElementById('result').innerHTML += '<br>' + 'buzz';
    } else if (i % 3 == 0) {
        document.getElementById('result').innerHTML += '<br>' + 'fizz';
    } else {
        document.getElementById('result').innerHTML += '<br>' + i;
    }
}