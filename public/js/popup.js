$(function () {
    $('#btnAdd').click(function () {
        $('#mask').show();
        $('#addDriver').show();
    });

    $('#addCancel').click(function () {
        $('#mask').hide();
        $('#addDriver').hide();
    });

    $('.btnRev').click(function () {
        $('#mask').show();
        $('#reviseDriver').show();
        var contentTag = $(this).parent().siblings();
        contentTag.each(function (index, element) {
            $('#reviseDriverForm').find('input[type=text]')[index].value = element.innerText;
        })
    });

    $('#reviseCancel').click(function () {
        $('#mask').hide();
        $('#reviseDriver').hide();
    });
})