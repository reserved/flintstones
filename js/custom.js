$(document).ready(function(){
  $('#rubbles').on('click',function(){
    The_FlintStones.vent.trigger('switch:rubbles');
  })
  $('#flintstones').on('click',function(){
    The_FlintStones.vent.trigger('switch:flintstones');
  })
});
