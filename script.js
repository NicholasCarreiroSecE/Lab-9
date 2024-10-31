$(document).ready(function () {
    $('.filter-btn').click(function () {
        const category = $(this).data('category');
        $('.gallery-item').each(function () {
            if (category === 'all' || $(this).data('category') === category) {
                $(this).fadeIn();
            } else {
                $(this).fadeOut();
            }
        });
    });

    $('.gallery-item').click(function () {
        const imgSrc = $(this).find('img').attr('src');
        $('#lightbox-image').attr('src', imgSrc);
        $('#lightbox').fadeIn();
    });

    $('#close-lightbox').click(function () {
        $('#lightbox').fadeOut();
    });

    $('#lightbox').click(function (e) {
        if (e.target.id === 'lightbox') {
            $('#lightbox').fadeOut();
        }
    });
});