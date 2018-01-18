'use strict';

// Constructor
var Prod = function() {

    var products = $('.productos');

    if (products) {
        products.each(function(){
            var $this = $(this);
            var category = $('.productos__categories li');

            category.each(function(){
                $(this).on('click', function(){
                    category.removeClass('-active');
                    $(this).addClass('-active');
                });
            });
        });
    }
};

module.exports = Prod;
