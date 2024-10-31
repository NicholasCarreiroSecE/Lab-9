$(document).ready(function () {
    $('.filter-btn').click(function () {    // When the filter button is clicked
        const category = $(this).data('category');  // Get the category value from the data-category attribute
        $('.gallery-item').each(function () {   // Loop through each gallery item
            if (category === 'all' || $(this).data('category') === category) { // If the category is 'all' or the data-category value matches the category
                $(this).fadeIn();   // Show the gallery item
            } else {
                $(this).fadeOut();  // Otherwise, hide the gallery item
            }
        });
    });

    $('.gallery-item').click(function () {
        const imgSrc = $(this).find('img').attr('src'); // Get the image source from the clicked gallery item
        $('#lightbox-image').attr('src', imgSrc); // Set the image source in the lightbox
        $('#lightbox').fadeIn(); // Show the lightbox
    });

    $('#close-lightbox').click(function () { // When the close button is clicked
        $('#lightbox').fadeOut(); // Hide the lightbox
    });

    $('#lightbox').click(function (e) { // When the lightbox is clicked
        if (e.target.id === 'lightbox') { // If the target element is the lightbox
            $('#lightbox').fadeOut();  // Hide the lightbox
        }
    });
});