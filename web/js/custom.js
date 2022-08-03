/**
 * Mageplaza
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Mageplaza.com license sliderConfig is
 * available through the world-wide-web at this URL:
 * https://www.mageplaza.com/LICENSE.txt
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this extension to newer
 * version in the future.
 *
 * @category    Mageplaza
 * @package     Mageplaza_Shopbybrand
 * @copyright   Copyright (c) Mageplaza (https://www.mageplaza.com/)
 * @license     https://www.mageplaza.com/LICENSE.txt
 */

require(['jquery', 'jquery/ui', 'slick'], function($) {
    $(document).ready(function() {


        function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
            var slider = jQuery($slidername);
            var settings = {
                mobileFirst: true,
                dots: $dots,
                arrows: $arrows,
                slidesToShow: 1.5,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 5000,
                arrows: false,
                dots: false,
                infinite: false,
                responsive: [{
                    breakpoint: $breakpoint,
                    settings: "unslick",
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }]
            };

            slider.slick(settings);

            jQuery(window).on("resize", function() {
                if (jQuery(window).width() > $breakpoint) {
                    return;
                }
                if (!slider.hasClass("slick-initialized")) {
                    return slider.slick(settings);
                }
            });
        }

        mobileOnlySlider(".brand-carousel", true, false, 767);

        // STAR RATING WIDTH PATCH
        var title = jQuery(".rating-result").attr("title");
        if (jQuery('.rating-summary').children().hasClass('rating-result')) {
            jQuery('.rating-result').children().css('width', title);
        }

        // SHOW INGRIDENT ON CLICK ON ICON PRODUCT DETAIL PAGE
        jQuery(document).on("click", ".allergen-icon-container", function() {
            jQuery("#tab-label-product\\.allergens").addClass("active");
            jQuery("#product\\.allergens").show();
        });
    });
});