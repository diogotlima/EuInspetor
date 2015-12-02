function AjaxRequest(url, type, data, updateTargetId, reloadSearch, processData, contentType) {
    //var form = $('#form0');
    //var token = $('input[name="__RequestVerificationToken"]', form).val();
    if (type === "GETINSIDE") {
        type = "GET";
        $(updateTargetId).html(CreateLoad());
    } else {
        CarregarLoad();
    }

    //var token = $('input[name="__RequestVerificationToken"]', $('#form0')).val();

    $.ajax({
        url: url,
        type: type,
        processData: processData, // tell jQuery not to process the data
        contentType: contentType, // tell jQuery not to set contentType
        //data: { __RequestVerificationToken: "", data },
        //data: ((type === "POST") ? { __RequestVerificationToken: token, data } : data),
        data: data,
        success: function (response) {
            if (response.success) {
                if (updateTargetId !== "") {
                    $(updateTargetId).html(response.html);
                }
                if (response.msgSuccess !== "" && response.msgSuccess) {
                    Materialize.toast(response.msgSuccess, 4000);
                    if (type === "POST") {
                        $("#form0")[0].reset();
                        $("#modal1").closeModal();
                        InicializarComponentes();
                    }
                }
                if (reloadSearch) reloadSearch();

                if (response.url) window.location = response.url;

            } else {
                if (response.errors) {
                    if ($.isArray(response.errors)) {
                        for (var i = 0; i < response.errors.length; i++) {
                            Materialize.toast(response.errors[i], 4000);
                        }
                    } else {
                        Materialize.toast(response.errors, 4000);
                    }
                }
            }
        },
        error: function (error) {
            if (error.status == 403) {
                window.location = "/Main/SessionExpired";
            } else {
                Materialize.toast(error.statusText, 4000);
            }
        },
        complete: function () {
            RemoverLoad();
        }
    }).done(function () {
        RemoverLoad();
    });

}

function CarregarAcoes(updateTargetId) {

    $(updateTargetId).html(CreateLoad());

    $.ajax({
        url: "/Perfil/CarregarAcoes",
        type: "GET",
        data: "",
        success: function (response) {

        },
        error: function (error) {
            Materialize.toast(error.statusText, 4000);
        },
        complete: function () {
            RemoverLoad();
        }

    }).done(function () {
        RemoverLoad();
    });

}

function CarregarLoad() {

    var mask = $('<div>', {
        id: 'mask',
        css: {
            position: 'fixed',
            left: 0,
            top: 0,
            zIndex: 99999,
            backgroundColor: '#ffffff',
            display: 'block',
            width: '100%',
            height: '100%',
            opacity: 0.8
        }
    });

    mask.append(CreateLoad());

    mask.appendTo('body');
}

function CreateLoad() {

    var load = $('<div>', {
        id: 'load',
        css: {
            width: '66px',
            margin: '0 auto',
            marginTop: '25%'
        }
    });
    var preLoad = $('<div>', { class: 'preloader-wrapper big active' });
    var snipper = $('<div>', { class: 'spinner-layer spinner-green-only' });
    var circleClipper = $('<div>', { class: 'circle-clipper left' });
    var gappatch = $('<div>', { class: 'gap-patch' });
    var circleClipperRight = $('<div>', { class: 'circle-clipper right' });

    circleClipperRight.append($('<div>', { class: 'circle' }));
    gappatch.append($('<div>', { class: 'circle' }));
    circleClipper.append($('<div>', { class: 'circle' }));

    snipper.append(circleClipperRight);
    snipper.append(gappatch);
    snipper.append(circleClipper);

    preLoad.append(snipper);
    load.append(preLoad);

    return load;
}

function RemoverLoad() {
    $("#mask").remove();
}

function InicializarComponentes() {

    $('select').material_select();
    $('ul.tabs').tabs();
    $('.datepicker').pickadate({ selectMonths: true, selectYears: 50 });
    Materialize.updateTextFields();

    $('.file-field').each(function () {
        var path_input = $(this).find('input.file-path');
        $(this).find('input[type="file"]').change(function () {
            path_input.val($(this)[0].files[0].name);
            path_input.trigger('change');
        });
    });
}

function IniciarDataTable() {
    $(".tabela-formatada").dataTable({
        "language": {
            "lengthMenu": "Mostrar _MENU_ resultados por página",
            "zeroRecords": "Nenhum resultado encontrado",
            "info": "Mostrando _PAGE_ páginas de _PAGES_",
            "infoEmpty": "Nenhum resultado encontrado",
            "infoFiltered": "(Filtrado de _MAX_ linhas)",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ resultados",
            "loadingRecords": "Carregando...",
            "processing": "Processando...",
            "search": "Pesquisar:",
            "paginate": {
                "first": "Primeiro",
                "last": "Último",
                "next": "Próxima",
                "previous": "Anterior"
            },
            "aria": {
                "sortAscending": ": ativar ordenação de coluna ascendente",
                "sortDescending": ": ativar ordenação de coluna decrescente"
            }
        }
    });
}

function dropDownCascade(url, selectPrincipal, selectTarget, funcao) {

    $(selectPrincipal).on("change", function () {
        if ($(this).val() !== "0" && $(this).val() !== "") {
            var idParam = $(this).serialize();
            $.ajax({
                url: url,
                data: idParam,
                success: function (data) {
                    var ddldist = $(selectTarget);
                    ddldist.children().not(":first").remove();
                    $(selectTarget).prop("disabled", false);
                    $.each(data, function (val, text) {
                        ddldist.append(
                            $("<option></option>").val(text.Value).html(text.Text)
                        );
                    });

                    $("select").material_select();
                    if (funcao) funcao();
                }
            });
        } else {
            var ddldist = $(selectTarget);
            ddldist.val("0");
            $("select").material_select();
        }
    });
}

function ConfirmDelete(title, message, type, controllerName, actionName, idObject, reloadSearch, updateTargetId) {
    var background = $('<div>', { class: 'background' });
    var modal = $('<div>', { class: 'modal' });
    var content = $('<div>', { class: 'modal-content' });
    var titulo = $('<h5>', { html: title });
    var mensagem = $('<p>', { html: message });
    var rodape = $('<div>', { class: 'modal-footer' });
    var botaoNao = $('<a>', {
        class: 'waves-effect waves-red btn-flat modal-action modal-close',
        href: '#',
        html: 'Não',
        onClick: "$('.background').remove()"
    });
    var botaoSim = $('<a>', {
        class: 'btn cyan waves-effect waves-light modal-action modal-close',
        href: '#',
        html: 'Sim',
        onClick: 'AjaxRequest("/' + controllerName + '/' + actionName + '", "' + type + '", "' + idObject + '", "' + updateTargetId + '", ' + reloadSearch + '); $(".background").remove();'
    });

    content.append(titulo);
    content.append(mensagem);

    rodape.append(botaoNao);
    rodape.append(botaoSim);

    modal.append(content);
    modal.append(rodape);

    background.append(modal);

    background.appendTo('body');
    modal.appendTo('body');
    modal.openModal();
}

function padZeroLeft(str, max) {
    str = str.toString();
    return str.length < max ? padZeroLeft("0" + str, max) : str;
}