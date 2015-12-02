$(".numero20").mask("00000000000000000000");
$(".numero10").mask("0000000000");
$(".numero9").mask("000000000");
$(".numero6").mask("000000");
$(".cpf").mask("000.000.000-00");
$(".cnpj").mask("00.000.000/0000-00");
$(".cep").mask("00000-000");
$(".codigoUnidade").mask("00.000");
$('.telefone').mask('(000)00000-0000');
$('.ano').mask("0000");
$('.classificacaoInstitucional').mask("00.000");
$('.time').mask("00:00");
$('.money').maskMoney({ prefix: 'R$ ', allowNegative: true, thousands: '.', decimal: ',', affixesStay: false });

$('.upper').keyup(function () {
    this.value = this.value.toUpperCase();
});



//$('.money').maskMoney({ allowNegative: true, thousands: '.', decimal: ',', affixesStay: false });

$('.sp_celphones').mask(spMaskBehavior, spOptions);

var spMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
    spOptions = {
        onKeyPress: function (val, e, field, options) {
            field.mask(spMaskBehavior.apply({}, arguments), options);
        }
    };

$('.sp_celphones').mask(spMaskBehavior, spOptions);