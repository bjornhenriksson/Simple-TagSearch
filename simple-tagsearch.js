(function ($) {
    $.fn.tagsearch = function (options) {
        var settings = $.extend({
            'item_selector': '.searchitem',
            'tag_selector': 'span'
        }, options);
        var search = this;
        var items = $(settings.item_selector);

        // Hide items and tags
        $(settings.item_selector + ', ' + settings.tag_selector).hide();

        search.on("keyup", function(e) {
            var value = search.val().toLowerCase();
            var length = value.length;
            var query = ":contains('" + value + "')";

            if (length) {
                $(items.filter(query)).show();
                $(items.filter(':not(' + query + ')')).hide();
            } else {
                items.hide();
            }
        });

        return this;
    };
}(jQuery));