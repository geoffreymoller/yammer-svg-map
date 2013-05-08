$(function() {

  // add the header to the page
  var header = new Header();
  header.render();

  var map = new Map({svgURL: 'img/floorplan.svg'});
  $('#container').append(map.render().el);

  // add the header to the page
  var controls = new Controls();
  $('#container').append(controls.render().el);

  $('body').on('keyup', function(e){
    if(e.keyCode === 191){
      header.trigger('focus');
    }
  });

});
