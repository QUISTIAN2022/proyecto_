var contador = 0;
    
function myFunction(tipo) {
    var x = parseInt(document.getElementById("myText").value);
    x = x + contador;
    document.getElementById("demo").innerHTML = x; 
}