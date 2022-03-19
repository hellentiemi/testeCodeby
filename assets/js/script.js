const miniCart = {
    init: () => {
        miniCart.verificarFrete();
    },
    verificarFrete: () => {
        var valorTotal = $('.valor-final').text();
        var freteGratis = $('.frete-gratis');

        valorTotal = valorTotal.replace('R$ ', '').replace(',', '.');
        valorTotal = parseFloat(valorTotal);
        if(valorTotal >= 10){
            freteGratis.addClass('ativo');
        }
    } 
}

$(document).ready(function () {
    miniCart.init();
});