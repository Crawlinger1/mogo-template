const accordion = () => {
    $(document).ready(function () {
        $('.accordion__item').click(function (e) {
            $('.accordion__item').removeClass('active');
            $(this).toggleClass('active');
        });
    });
}

export default accordion;