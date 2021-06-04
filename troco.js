function calculaTroco() {

    let valorCompra = parseFloat($("#valorCompra").val());
    let valorPago = parseFloat($("#valorPago").val());
    let valorTroco = 0;

    if (valorPago == valorCompra) {
        valorTroco = 0;
        $("#valorTroco").val(valorTroco);
        alert("Não gerou troco");

    } else if (valorPago > valorCompra) {

        valorTroco = valorPago - valorCompra;
        $("#valorTroco").val(valorTroco);
        $("#notasUtilizadas").val(calculaNotas(valorTroco));  /* envia para o textarea o retorno da função calculaNotas */

    } else {
        alert("Não gerou troco (Valor pago menor que valor da compra)");
    }

    $("#valorCompra").val("");
    $("#valorPago").val("");
    $("#valorCompra").focus();

}

/* FUNÇAO PRA CALCULAR AS NOTAS */

function calculaNotas(troco) {
    var notas = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10];
    var texto = '';
    for (var x = 0; x < notas.length; x++) {
        if (troco >= notas[x]) {
            var div = Math.floor(troco / notas[x]);
            texto += div + " notas de " + notas[x] + "\n";
            troco -= div * notas[x];
        }

    }
    return texto;
}
