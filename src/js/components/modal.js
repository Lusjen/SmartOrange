var btn = $('.js-btn');
var modal = $('.js-modal');
var close = $('.js-close');


btn.on('click', function() {
  modal.addClass('open');
});

close.on('click', function() {
  modal.removeClass('open');
});
