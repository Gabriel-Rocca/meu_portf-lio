function imprimirNumeros() {
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += i + '<br>';
    }
    document.getElementById('result').innerHTML = resultado;
}