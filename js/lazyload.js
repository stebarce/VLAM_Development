$(document).ready(function () {
    window.lazySizesConfig = window.lazySizesConfig || {};
    window.lazySizesConfig.init = false;
    $('.lazyload').each(function () {
        $(this).attr('data-src', $(this).attr('src'));
        $(this).removeAttr('src');
        $(this).attr('data-srcset', $(this).attr('srcset'));
        $(this).removeAttr('srcset');
        $(this).removeAttr('sizes');
        $(this).attr('data-sizes', 'auto');
        lazySizes.init();
    });
});