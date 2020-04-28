$(function() {
    var tabs = $('#features > nav a');
    var tabscontent = $('#features > article > sectiion');

    tabs.click(function(e) {
       e.preventdefault();

       var that =$(this);

       tabs.removeclass('is-selected');
       that.addclass('is-selected');
       tabscontent.removeclass('is-selected');

       tabscontent
        .fliter((i.tab) = $(tab).data('id') === that.data('id'))
        .addclass('is-selected');
});
});
