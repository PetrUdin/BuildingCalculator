$(document).ready(function () {
    $("#distance-range").on("input", function () {
        $("#distance").val(this.value);
    });

    $(".control__button").click(function () {
        $(this)
            .addClass('control__button-active')
            .siblings()
            .removeClass('control__button-active');

        if ($(this).data('type') === "section") {
            $('#section__length-block').removeClass('hidden');
        } else {
            $('#section__length-block').addClass('hidden');
        }
    });

    function calc() {
        const total = Number($('#total-length').val());
        const distance = ($('#distance').val());
        const defaultPrice = 1250;
        let result = 0;
        let distanceCost = 0;
        let materialCost = 0;
        let dopOptions = 0;

        if ($('.control__button-active').data('type') === "wood") {
            materialCost = 1500;
        } else if ($('.control__button-active').data('type') === "prof") {
            materialCost = 1000;
        } else {
            materialCost = 5000;
        };

        $("input:checkbox:checked").each(function (index, item) {
            dopOptions = dopOptions + Number($(item).val());
        });

        (distance <= 35) ? distanceCost = 2000 :
            (distance <= 50) ? distanceCost = 5000 :
                (distance <= 75) ? distanceCost = 7000 :
                    distanceCost = 10000;

        result = total * defaultPrice + distanceCost + materialCost + dopOptions;

        $('#result').html(result);
    }
    $('.calc-btn').click(calc);
});
