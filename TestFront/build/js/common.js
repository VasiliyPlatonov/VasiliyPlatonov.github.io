(function($) {
    var target = document.querySelector('.user-link');

    function selection(elem) {
        var elem = document.querySelector(elem);
        var select = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(elem);
        select.addRange(range);
    }

    target.onclick = function() {
        selection('.user-link > span');
    };


    document.querySelector('.prompt__button-close').onclick = function() {
        var prompt = document.querySelector('.prompt');
        prompt.style.marginTop = (-1 * prompt.offsetHeight) + 'px';
    };


    // модальные окна

    $('.button-share, .button-share--big').click(function() {
        $('#share-modal').modal('show');
    });

    // popover

    $('.button-url').popover({
        placement: 'auto top',
        content: 'http://cll.io/a6lnu'
    });

    $('.button-url').click(function() {
        $('.this').popover();
    });


// checkbox
    $('input[type="checkbox"]').parent().click(function() {
        var checkbox = $(this).children('input[type="checkbox"]');
        if (checkbox.attr('checked')) {
            checkbox.removeAttr('checked');
            checkbox.parent().removeClass('checkbox-select');
            checkbox.checked = false;
            checkbox.attr('value', 'off');
        } else if (!(checkbox.attr('checked'))) {
            checkbox.attr('checked', 'true');
            checkbox.parent().addClass('checkbox-select');
            checkbox.checked = true;
            checkbox.attr('value', 'on');
        }
    });


})(jQuery);
