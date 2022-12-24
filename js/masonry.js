$(document).ready(function() {
  jQuery('.item_masonry').hover(
    function(){
      $(this).find('.masonry_hover').fadeIn();
    },

    function(){
      $(this).find('.masonry_hover').fadeOut();
    }
  );

  const size = '.size4';
  const content = $('#mas_gall');

  content.imagesLoaded(function(){
    content.masonry({
      itemSelector: '.item_masonry',
      columnWidth: size,
      percentPosition: true
    })
  })
})